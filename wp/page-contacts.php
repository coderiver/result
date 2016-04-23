<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Rezult
 * @since Rezult 1.0
 */
 
get_header(); ?>


<div class="out">
  <div class="contacts">
    <div class="contacts__left">

      <section class="contacts__section">
        <div class="contacts-item">
          <div class="contacts-item__inner">
            <h1 class="h1 uppercase">Контакты</h1>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Адрес производства</strong>
            <p>
              11501
              <br>Украина, Житомирская обл.
              <br>г. Коростень, ул. Октябрьская, 11-Б
            </p>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Адрес для корреспонденции</strong>
            <p>
              11501
              <br>Украина, Житомирская обл.
              <br>г. Коростень, Главпочтамп 1, а/я 29
              <br><a href="mailto: info@kmm.ua">info@kmm.ua</a>
            </p>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Администрация</strong>
            <p>
              Генеральный  директор 
              <br>Шевело Владимир Николаевич
              <br>
            </p>
            <p>тел./факс: <strong><a href="tel:+380414260100">+380 (4142) 601-00</a></strong>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Отдел продаж</strong>
            <p>
              04070
              <br>Украина
              <br>Киев, ул. П.Сагайдачного, 11
            </p>
            <p>тел./факс: <strong><a href="tel:+380442204311">+380 44 220-43-11</a></strong></p>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Отдел снабжения</strong>
            <p>
              начальник отдела
              <br>Олексийчук Александр Степанович
            </p>
            <p>тел./факс: <strong><a href="tel:+380414260113">+380 (4142) 601-13</a></strong></p>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Бухгалтерия</strong>
            <p>
              главный бухгалтер
              <br>Яковенко Алла Леонидовна
            </p>
            <p>тел./факс: <strong><a href="tel:+380414260110">+380 (4142) 601-10</a></strong></p>
          </div>
        </div>

        <div class="contacts-item contact contact_action">
          <div class="contacts-item__inner">
            <strong class="contact__title">Отдел реализации</strong>
            <p>
              начальник отдела
              <br>Овсийчук Светлана Васильевна
            </p>
            <p>тел./факс: <strong><a href="tel:+380414260119">+380 (4142) 601-19</a></strong></p>
          </div>
        </div>

      </section>

      <section class="contacts__section">
        <div class="contacts-item contatcs__section-head">
          <div class="contacts-item__inner">
            <h4 class="uppercase spacing-100">Наши менеджеры</h4>
            <!-- <div class="select">
              <button class="select__button">в Киеве</button>
              <div class="select__button-overlay"></div>
              <ul class="select__list">
                <li class="select__item" data-value="laminat_1">в Киеве</li>
                <li class="select__item" data-value="laminat_2">в Москве</li>
              </ul>
            </div> -->
          </div>
        </div>

        <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt1@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:roman.lisovich@kmm.ua"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4657728"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Лисович Роман Владимирович</span>
                        <p>
                          тел./факс: +380 (67) 465-7728
                          <br>roman.lisovich@kmm.ua
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt2@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:roman.lisovich@kmm.ua"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4657728"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Лисович Роман Владимирович</span>
                        <p>
                          тел./факс: +380 (67) 465-7728
                          <br>roman.lisovich@kmm.ua
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt3@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:rozumec.v@ukr.net"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4657568"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Розумець Валентин Николаевич</span>
                        <p>
                          тел./факс: +380 (67) 465-7568
                          <br>rozumec.v@ukr.net
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt4@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:Maxim.Voropaev@rezult.pro"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4409179"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Воропаев Максим Игоревич</span>
                        <p>
                          тел./факс: +380 (67) 440-9179
                          <br>Maxim.Voropaev@rezult.pro
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt5@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:Aleksandr.Sapov@rezult.pro"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)5578528"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Сапов Александр Васильевич</span>
                        <p>
                          тел./факс: +380 (67) 557-8528
                          <br>Aleksandr.Sapov@rezult.pro
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contatcs__section-head">
                      <div class="contacts-item__inner">
                        <h4 class="uppercase spacing-100">Направление экспорт</h4>
                        
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt6@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:vladimir.karyahin@kmm.ua"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4337141"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Карягин Владимир Владимирович</span>
                        <p>
                          тел./факс: +380 (67) 433-7141
                          <br>vladimir.karyahin@kmm.ua
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt7@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:artem.zinchenko@kmm.ua"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4657567"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Зинченко Артем Анатольевич</span>
                        <p>
                          тел./факс: +380 (67) 465-7567
                          <br>artem.zinchenko@kmm.ua
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt8@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:trade.korosten@gmail.com"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+380(67)4024882"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Башкисер Аркадий Витальевич</span>
                        <p>
                          тел./факс: +380 (67) 402-4882
                          <br>trade.korosten@gmail.com
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contatcs__section-head">
                      <div class="contacts-item__inner">
                        <h4 class="uppercase spacing-100">Наши менеджеры в России</h4>
                        
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt9@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:Ln76@bk.ru"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+7(985)6980255"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Токмаков Виктор Валерьевич</span>
                        <p>
                          тел./факс: +7 (985) 698-0255
                          <br>Ln76@bk.ru
                        </p>
                      </div>
                    </div>
                    <div class="contacts-item contact">
                      <div class="contacts-item__inner">
                        <div class="contact__pic">
                          <!-- <img src="http://api.adorable.io/avatars/100/abtt10@adorable.io.png" alt=""> -->
                        </div>
                        <div class="contact__actions">
                          <a class="contact__action-btn" href="mailto:laminat21@bk.ru"><svg class="icon icon-bubles">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-bubles"></use>
        </svg>
        </a>
                          <a class="contact__action-btn" href="tel:+7(967)0222110,+7(918)4477774"><svg class="icon icon-call">
          <use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-call"></use>
        </svg>
        </a>
                        </div>
                        <span class="contact__title">Арутюнов Владимир Аркадьевич</span>
                        <p>
                          тел./факс: +7 (967) 022-2110, +7 (918) 447-7774
                          <br>laminat21@bk.ru
                        </p>
                      </div>
                    </div>
                    

      </section>

      <section class="contacts__section">
        <div class="contacts-item contacts__section-head">
          <div class="contacts-item__inner">
            <h4 class="uppercase spacing-100">Заказ продукции</h4>

            <form>
              <div class="form-column">
                <div class="form-field">
                  <label class="form-label" for="companyName">Название компании</label>
                  <input class="form-input" type="text" id="companyName" name="company_name">
                  <div class="form-hint"><svg class="icon icon-hint-info">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-info"></use>
</svg>
                    <span>Hint text</span></div>
                  <div class="form-hint-error"><svg class="icon icon-hint-error">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-error"></use>
</svg>
                    <span>Error text</span></div>
                </div>

                <div class="clearfix">
                  <div class="form-field form-field_country">
                    <label class="form-label" for="country">Страна</label>
                    <input class="form-input" type="text" id="country" name="country">
                    <div class="form-hint"><svg class="icon icon-hint-info">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-info"></use>
</svg>
                      <span>Hint text</span></div>
                    <div class="form-hint-error"><svg class="icon icon-hint-error">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-error"></use>
</svg>
                      <span>Error text</span></div>
                  </div>

                  <div class="form-field form-field_city">
                    <label class="form-label" for="city">Город</label>
                    <input class="form-input" type="text" id="city" name="city">
                    <div class="form-hint"><svg class="icon icon-hint-info">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-info"></use>
</svg>
                      <span>Hint text</span></div>
                    <div class="form-hint-error"><svg class="icon icon-hint-error">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-error"></use>
</svg>
                      <span>Error text</span></div>
                  </div>
                </div>

                <div class="form-field">
                  <label class="form-label" for="contactPerson">Контактное лицо</label>
                  <input class="form-input" type="text" id="contactPerson" name="contact_person">
                  <div class="form-hint"><svg class="icon icon-hint-info">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-info"></use>
</svg>
                    <span>Hint text</span></div>
                  <div class="form-hint-error"><svg class="icon icon-hint-error">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-error"></use>
</svg>
                    <span>Error text</span></div>
                </div>

                <div class="form-field form-field_phone has-error">
                  <label class="form-label" for="phone">Телефон</label>
                  <input class="form-input" type="tel" id="phone" name="phone" value="+380 ">
                  <div class="form-hint"><svg class="icon icon-hint-info">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-info"></use>
</svg>
                    <span>Hint text</span></div>
                  <div class="form-hint-error"><svg class="icon icon-hint-error">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-error"></use>
</svg>
                    <span>Error text</span></div>
                </div>
              </div>

              <div class="form-field">
                <label class="form-label" for="comment">Комментарий к заказу</label>
                <textarea class="form-input" rows="3" id="comment" name="comment"></textarea>
                <div class="form-hint"><svg class="icon icon-hint-info">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-info"></use>
</svg>
                  <span>Hint text</span></div>
                <div class="form-hint-error"><svg class="icon icon-hint-error">
<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-hint-error"></use>
</svg>
                  <span>Error text</span></div>
              </div>

              <div class="form-field">
                <button class="btn btn_xlg btn_black btn_fw" type="submit"><span>Сделать заказ</span></button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>

    <div class="contacts__right bg">
      <div id="contacts-map" style="background: url('<?php bloginfo('template_directory'); ?>/img/contacts-map.jpg'); background-size: cover;"></div>
    </div>
  </div>
</div>
   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>