import { Component } from "react";

export type ClassCompentProps = {
  href: string;
  text: string;
};
export default class ClassCompent extends Component<ClassCompentProps> {
  render() {
    const { href, text } = this.props;
    return (
      <li>
        <a href="http://www.google.com">
          <p>go to google</p>
        </a>
      </li>
    );
  }
}
