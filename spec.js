describe ('App_E2E_Test', function() {

  beforeEach (function () {
    browser.driver.get('http://localhost:7777/');
    browser.driver.ignoreSynchronization = true;
  })

  describe ('Checks initial loads', function () {
    it ('successfully loads', function () {
      expect(browser.driver.getTitle()).toEqual('Dropbox');
    })
  })

  describe ('Checks headers', function () {
    it ('should have correct h1 name', function () {
      expect(browser.driver.findElement(by.tagName('h1')).getText()).toEqual('팀워크의 재창조');
    })

    it ('should have correct h2 name', function () {
      expect(browser.driver.findElement(by.className('medium-title')).getText()).toEqual('더욱 간편한 협업 방법인 Dropbox Paper와 스마트 동기화를 소개합니다.');
    })
  })

  describe ('Checks input types', function () {
    it ('should have correct input type', function () {
      browser.driver.findElement(by.className('register-form__credential-fields'))
        .findElements(by.tagName('input')).then(function (inputs) {
          expect(inputs[0].getAttribute('type')).toEqual('email');
          expect(inputs[1].getAttribute('type')).toEqual('password');
        })
    })
  })

  describe ('Checks buttons', function () {
    it ('should have correct length of buttons', function () {
      browser.driver.findElement(by.className('hero__register'))
        .findElements(by.tagName('button')).then(function (buttons) {
          expect(buttons.length).toEqual(2);
        })
    })

    it ('should have correct button for signup', function () {
      browser.driver.findElement(by.className('hero__register'))
        .findElements(by.tagName('button')).then(function (buttons) {
          expect(buttons[0].getText()).toContain('무료로 가입');
          expect(buttons[1].getText()).toContain('Google 로그인을 사용하여 무료로 가입');
        })
    })

    it ('should have correct button type', function () {
      browser.driver.findElement(by.className('hero__register'))
        .findElements(by.tagName('button')).then(function (buttons) {
          expect(buttons[0].getAttribute('type')).toEqual('submit');
          expect(buttons[1].getAttribute('type')).toEqual('button');
        })
    })
  })

  describe ('Checks locale link button', function () {
    it ('should have correct button for locale link', function () {
      browser.driver.findElement(by.id('locale-link'))
        .findElements(by.tagName('button')).then(function (buttons) {
          expect(buttons.length).toEqual(1);
        })
    })

    it ('should have correct title attribute', function () {
      expect(browser.driver.findElement(by.id('locale-link'))
        .findElement(by.tagName('button')).getAttribute('title')).toEqual('언어 선택');
    })
  })

});
