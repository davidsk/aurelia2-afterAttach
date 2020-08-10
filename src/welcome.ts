export class Welcome {
  public message = "Welcome to Aurelia 2!";

  afterAttach(): void {
    const messageElement: HTMLHeadingElement = document.querySelector("h1");
    console.log(messageElement != null);
  }
}
