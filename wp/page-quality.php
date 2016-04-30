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
    <?php while ( have_posts() ) : the_post(); ?>
    <!-- begin L -->
    <div class="l">
      <div class="l-content">
        <h1 class="h1 uppercase title-margin"><? the_title();?></h1>
        <h4 class="h4 title-margin">
          <?php the_field('texttop');?>
        </h4>

        <div class="clearfix font-size-0">
          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">1</div>
              <h4 class="h4 spacing-50"><?php the_field('q1');?></h4>
              <?php echo wpautop(get_field('q1text'));?>
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
              <h4 class="h4 spacing-50"><?php the_field('q2');?></h4>
              <?php echo wpautop(get_field('q2text'));?>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">3</div>
              <h4 class="h4 spacing-50"><?php the_field('q3');?></h4>
              <?php echo wpautop(get_field('q3text'));?>
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
              <h4 class="h4 spacing-50"><?php the_field('q4');?></h4>
              <?php echo wpautop(get_field('q4text'));?>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">5</div>
              <h4 class="h4 spacing-50"><?php the_field('q5');?></h4>
              <?php echo wpautop(get_field('q5text'));?>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <h4 class="h4 spacing-50"><?php the_field('q6');?></h4>
              <h4 class="h4 spacing-50">Usability</h4>
              <?php echo wpautop(get_field('q6text'));?>
            </div>
          </div>

          <div class="l-content-col">
            <div class="step step_simple">
              <div class="step__number">7</div>
              <h4 class="h4 spacing-50"><?php the_field('q7');?></h4>
              <?php echo wpautop(get_field('q7text'));?>
            </div>
          </div>

          <div class="l-content-col">
            <div class="figure-small">
              <img src="<?php bloginfo('template_directory'); ?>/img/quality-3.jpg" alt="Quality">
            </div>
          </div>

        </div>

        <h4 class="h4 title-margin">
          <?php the_field('textbottom');?>
        </h4>

      </div>
    </div>
    <!-- END L -->

  </div>
</div>
<!-- end OUT -->

   
<?php endwhile; // end of the loop. ?>    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>