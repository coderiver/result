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
        <h1 class="h1 uppercase title-margin">Стандарты качества</h1>
        <h4 class="h4 title-margin">
          Качество REZULT базируется на семи основных принципах.
          Благодаря этим жестким стандартам, REZULT довел качество
          ламината до совершенства.
        </h4>

        <div class="clearfix font-size-0">
          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">1</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Quality</h4>
              <p>Абсолютный контроль</p>
              <p>
                Международная команда специалистов
                по&nbsp;качеству обеспечивает контроль
                на&nbsp;всех&nbsp;стадиях процесса, от
                поступления&nbsp;сырья до поставки
                конечного&nbsp;продукта потребителю.
              </p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="figure-small">
              <img src="<?php bloginfo('template_directory'); ?>/img/quality-1.jpg" alt="Quality">
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">2</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Technology</h4>
              <p>Современные технологии</p>
              <p>Использование в производстве передовых&nbsp;инженерных разработок.</p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">3</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Enterprise</h4>
              <p>Полная автоматизация</p>
              <p>
                Одна из самых мощных производственных&nbsp;линий в Европе,
                полностью укомплектованная немецким&nbsp;оборудованием.
              </p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="figure-small shift-left">
              <img src="<?php bloginfo('template_directory'); ?>/img/quality-2.jpg" alt="Quality">
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">4</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Material</h4>
              <p>Использование качественного сырья</p>
              <p>
                Ламинат изготавливается не из отходов мебельной
                промышленности, а только из&nbsp;натурального дерева.
              </p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">5</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Ecology</h4>
              <p>Безопасность эксплуатации</p>
              <p>
                Содержание формальдегида
                в&nbsp;конечном&nbsp;продукте соответствует
                требованиям&nbsp;европейских норм
                <br>(EN 13329).
              </p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">6</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Usability</h4>
              <p>Удобство работы</p>
              <p>
                Для укладки ламината применяется
                универсальная, простая и надежная
                система креплений в один клик.
              </p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">7</div>
              <h4 class="h4 uppercase spacing-50">Rezult Pro</h4>
              <h4 class="h4 spacing-50">Reliability</h4>
              <p>Честная гарантия</p>
              <p>
                Гарантийный срок эксплуатации
                напольного&nbsp;покрытия REZULT
                до&nbsp;тридцати&nbsp;лет.
              </p>
            </div>
          </div>

          <div class="l-content-col">
            <div class="figure-small">
              <img src="<?php bloginfo('template_directory'); ?>/img/quality-3.jpg" alt="Quality">
            </div>
          </div>

        </div>

        <h4 class="h4 title-margin">
          Результат, который обеспечивает REZULT — не просто
          качественное&nbsp;напольное покрытие. Результат — это гарантия,
          что у вас под ногами будет прочный фундамент на долгие
          годы. Это твердая уверенность, что вы сделали верный
          выбор&nbsp;и совершили выгодную покупку.
        </h4>

      </div>
    </div>
    <!-- END L -->

  </div>
</div>
<!-- end OUT -->

   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>