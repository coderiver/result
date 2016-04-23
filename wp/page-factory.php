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
        <h1 class="h1 uppercase title-margin">Завод rezult</h1>
        <h4 class="h4">
          Завод REZULT — экологически чистое производство плит&nbsp;МДФ&nbsp;и&nbsp;ламината.
          Завод располагает современным производственным оборудованием, большими
          складскими помещениями и сетью транспортных коммуникаций.
        </h4>

        <figure class="figure">
          <div class="figure__img">
            <img src="<?php bloginfo('template_directory'); ?>/img/factory.jpg" alt="Factory" />
          </div>
          <figcaption class="figure__caption text l-col-620">
            Завод построен в 200x году и оборудован технологическими линиями
            ведущего немецкого поставщика оборудования для деревообрабатывающей
            промышленности «Siempelkamp».
          </figcaption>
        </figure>

        <figure class="figure figure_with-aside">
          <div class="figure__img">
            <img src="<?php bloginfo('template_directory'); ?>/img/factory-2.jpg" alt="Factory" />
          </div>
          <div class="figure__aside">
            <div class="number number_small">
                Объём<br> производства МДФ
                <strong class="number__value">300 000</strong>
                м³ в год
            </div>
          </div>
          <figcaption class="figure__caption text l-col-620">
            На линиях производства выпускаются шлифованные плиты толщиной
            от&nbsp;3 до&nbsp;40 мм. Они полностью отвечают самым жестким требованиям
            европейского стандарта качества EN622-5 по содержаниею формальдегида.
          </figcaption>
        </figure>

        <figure class="figure figure_with-aside">
          <div class="figure__aside">
            <div class="number">
                Рабочих<br> мест
                <strong class="number__value">800</strong>
            </div>
            <div class="number">
                Cумма<br> инвестиций
                <strong class="number__value">170</strong>
                млн €
            </div>
          </div>
          <div class="figure__img">
            <img src="<?php bloginfo('template_directory'); ?>/img/factory-3.jpg" alt="Factory" />
          </div>
          <figcaption class="figure__caption text l-col-620">
            МДФ (мелко-дисперсионная фракция дерева) — древесно-волокнистая
            плита средней плотности, изготовлена методом прессования древесного волокна.
            Это материал в плитах, изготовленный из высушенных древесных волокон,
            обработанных специальными связующими веществами с последующим горячим
            прессованием до плотности 700…870 кг/ м. куб. Является основой для
            ламинирования, каширования, шпонированния и покраски.
          </figcaption>
        </figure>

        <figure class="figure">
          <div class="figure__img">
            <img src="<?php bloginfo('template_directory'); ?>/img/factory-4.jpg" alt="Factory" />
          </div>
          <figcaption class="figure__caption text l-col-620">
            ХДФ – древесно-волокнистая плита высокой плотности. Представляет собой
            продукт, производимый из того же сырья и по той же технологии, что и МДФ,
            но при более высоком давлении пресса. В результате достигаются повышенная
            прочность и твердость материала. Используется как основа ламинированных полов.
          </figcaption>
        </figure>

        <figure class="figure figure_with-aside">
          <div class="figure__aside">
            <div class="number">
                Площадь<br> завода
                <strong class="number__value">40</strong>
                гектар
            </div>
          </div>
          <div class="figure__img">
            <img src="<?php bloginfo('template_directory'); ?>/img/factory-5.jpg" alt="Factory" />
          </div>
          <figcaption class="figure__caption text l-col-620">
            МДФ (мелко-дисперсионная фракция дерева) — древесно-волокнистая
            плита средней плотности, изготовлена методом прессования древесного волокна.
            Это материал в плитах, изготовленный из высушенных древесных волокон,
            обработанных специальными связующими веществами с последующим горячим
            прессованием до плотности 700…870 кг/ м. куб. Является основой для
            ламинирования, каширования, шпонированния и покраски.
          </figcaption>
        </figure>

        <h4 class="h4 shift-left">
          Результат, который обеспечивает REZULT — не просто качественное напольное покрытие.
          Результат — это гарантия,&nbsp;что у вас под ногами будет прочный фундамент на&nbsp;долгие годы.
          Это твердая уверенность, что вы сделали верный выбор и совершили выгодную покупку.
        </h4>
      </div>
    </div>
    <!-- END L -->

  </div>
</div>
<!-- end OUT -->

   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>