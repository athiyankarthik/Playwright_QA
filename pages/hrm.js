class Orange {
  constructor(page) {
    this.page = page;
    this.username = '//input[@name="username"]';
    this.password = '//input[@name="password"]';
    this.submit = '//button[text()= " Login "]';
  }

  async login(uname, pword) {
    await this.page.locator(this.username).fill(uname);
    await this.page.locator(this.password).fill(pword);
    await this.page.locator(this.submit).click();
  }
}

export default Orange;