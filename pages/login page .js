export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginBtn = page.locator("//button[normalize-space()='Login']");
    this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to RYZE Claim Solutions' });
    this.invalidCredsMsg = page.getByText('Invalid credentials');
  }

  async goto() {
    await this.page.goto('https://dev01.ryzeclaims.com/dashboard');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    await this.page.waitForURL(/dashboard/, { timeout: 10000 });
    await this.welcomeHeading.waitFor({ state: 'visible' });
  }
}