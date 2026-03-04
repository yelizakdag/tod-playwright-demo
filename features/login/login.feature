Feature: TOD TV Login

  Scenario: Geçersiz kimlik bilgileriyle giriş denemesi
    Given TOD TV ana sayfasındayım
    And çerez popup'ını kapatıyorum
    When giriş yap sayfasına gidiyorum
    And kullanıcı adı olarak "yelizakdag" giriyorum
    And şifre olarak "12345" giriyorum
    And devam et butonuna tıklıyorum
    Then "Lütfen geçerli bir Şifre girin!" hata mesajını görmeliyim
