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
<!-- BEGIN OUT -->
<div class="out">
  <div class="v-line-container">

    <?php get_template_part( 'partials/header-small' ); ?>

    <!-- begin L -->
    <div class="l">
      <div class="l-content">
        <h1 class="h1 uppercase title-margin">Инструкция по сборке</h1>
        <h4 class="h4">
          Установить ламинат еще никогда не было так просто!<br>
          Монтаж ламината не требует  специальной подготовки или инструмента,
          его  легко осуществить самостоятельно.
        </h4>

        <div class="figure">
          <div class="figure__img">
            <iframe
              src="https://player.vimeo.com/video/110034637"
              width="820"
              height="461"
              frameborder="0"
              webkitallowfullscreen mozallowfullscreen allowfullscreen
            ></iframe>
          </div>
        </div>

        <h4 class="h4">
          Высококачественный, легкий в укладке и обслуживнии
          ламинат&nbsp;Floorplus будет служить вам долгие годы.
          Монтаж&nbsp;ламината легко осуществить самостоятельно,
          просто&nbsp;размесите пластины на полу, отрежьте ненужную
          часть,&nbsp;нажмите до щелчка, и пол готов к использованию.
        </h4>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">1</div>
            <h4 class="h4 uppercase spacing-50">Подготовка</h4>
            <p>
              Убедитесь, что поверхность
              <br>подготовленного покрытия ровная.
              <br>Проверьте края пластин.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-1.svg" alt="Step 1"/></div>
        </figure>

        <figure class="step is-active">
          <figcaption class="step__text">
            <div class="step__number">2</div>
            <h4 class="h4 uppercase spacing-50">Начало укладки</h4>
            <p>
              Начните укладывать первый ряд с левой
              стороны комнаты, шипами к стене.
              Установите&nbsp;клинья между стеной
              и&nbsp;поверхностью.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-2.svg" alt="Step 2"/></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">3</div>
            <h4 class="h4 uppercase spacing-50">Первый ряд</h4>
            <p>
              Возьмите следующую пластину и держа ее
              под наклоном, вставьте шип в паз ранее
              установленной пластины, затем ровно
              уложите. Установите пластины до конца ряда.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-3.svg" alt="Step 3"/></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">4</div>
            <h4 class="h4 uppercase spacing-50">Окончание ряда</h4>
            <p>
              Отмерьте необходимую длину последней
              пластины ряда, отрежьте лишнюю часть,
              установите пластину и закончите ряд.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-4.svg" alt="Step 4"/></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">5</div>
            <h4 class="h4 uppercase spacing-50">Следующий ряд</h4>
            <p>
              Пластины нового ряда монтируются между
              собой отдельно от ранее уложенной
              поверхности.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-5.svg" alt="Step 5"/></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">6</div>
            <h4 class="h4 uppercase spacing-50">Начало нового ряда</h4>
            <p>
              Если оставшаяся от предыдущего ряда
              часть&nbsp;пластины длиннее 20 см, начните
              следующий&nbsp;ряд с нее. Стыки краев пластин
              соседних рядов должны быть минимум
              20&nbsp;см&nbsp;друг от друга.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-6.svg" alt="Step 6"/></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">7</div>
            <h4 class="h4 uppercase spacing-50">Соединение рядов</h4>
            <p>
              Акуратно приподнимите получившийся ряд
              и&nbsp;присоедините к уже уложенному ряду.
              Убедитесь в отсутствии сдвигов пластин.
            </p>
          </figcaption>
          <div class="step__img"><img src="<?php bloginfo('template_directory'); ?>/img/steps/step-7.svg" alt="Step 7"/></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">8</div>
            <h4 class="h4 uppercase spacing-50">Следующие ряды</h4>
            <p>Продолжайте укладку поверхности по рядам.</p>
          </figcaption>
          <div class="step__img"></div>
        </figure>

        <figure class="step">
          <figcaption class="step__text">
            <div class="step__number">9</div>
            <h4 class="h4 uppercase spacing-50">Последний ряд</h4>
            <p>
              Смонтируйте последний ряд.
              <br>При необходимости обрежьте край
              до&nbsp;необходимой ширины ряда, после,
              установите его.
            </p>
          </figcaption>
          <div class="step__img"></div>
        </figure>

      </div>
    </div>
    <!-- END L -->

  </div>
</div>
<!-- end OUT -->

   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>