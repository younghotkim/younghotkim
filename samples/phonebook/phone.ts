interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

//api

function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 821011112222,
        },
        office: {
          num: 821033334444,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 821055556666,
        },
        office: {
          num: 821077778888,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 821000000000,
        },
        office: {
          num: 821012345678,
        },
      },
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

//main

class AddressBook {
  contacts: Contact[] = [];

  constructor() {}

  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
}

async function test() {
  let addressBook: AddressBook = new AddressBook();
  await addressBook.fetchData();
  let byName: Contact[] = addressBook.findContactByName("마동석");
  console.log(byName);
}

test();
