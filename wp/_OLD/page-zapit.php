<?php get_header(); ?>

<div class="page-content">
  <div class="l">

    <?php get_template_part( 'subheader' ); ?>


    

    <?
    $the_query = new WP_Query( 'page_id=34' );
    while ( $the_query->have_posts() ) {
      $the_query->the_post();
    ?>
    <div class="article">
      <h1><?php the_title(); ?></h1>
      <?php the_content(); ?>
    </div>
    <!-- end text -->
    <?php
    }
    wp_reset_postdata();
    ?>


    <!-- begin form  -->
    <div class="form">
      <h2><?php echo __('<!--:ru-->Обратная связь<!--:--><!--:ua-->зворотній зв’язок<!--:-->');?></h2>
      <?php  
             if ( qtrans_getLanguage() == 'ru' ) {
                echo do_shortcode('[contact-form-7 id="183" title="Zapit_ru"]');
             }
             elseif ( qtrans_getLanguage() == 'ua' ) {
                echo do_shortcode('[contact-form-7 id="49" title="Zapit"]');
             }
         ?>
      
      
    </div>
    <!-- end form -->



    <!-- <div class="align-center">
      {{mixins.btnLink('Завантажити ще', 'btn_md')}}
    </div> -->

  </div>
</div>


<?php get_footer(); ?>
