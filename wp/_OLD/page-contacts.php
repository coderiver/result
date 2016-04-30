<?php get_header(); ?>

<div class="page-content kyiv">
  <div class="l">

    <?php get_template_part( 'subheader' ); ?>

    <!-- begin contacts  -->
    <div class="contacts">
      <!-- begin contacts__left  -->
      <div class="contacts__left">
        <?php 
        $allterms =  get_terms('region');
        $termsarray = array();
         ?>
        <div class="select">
          <select name="" id="" class="js-region">
            <?php foreach ($allterms as $cat) : ?>
              <option value="<?php echo $cat->slug;?>"><?php echo $cat->name;?></option>
              <?php $termsarray[] = $cat->slug; ?>
            <?php endforeach; ?>
          </select>
          <div class="select__value">
            <?php echo $allterms[0]->name; ?>
          </div>
          <div class="select__arrow icon icon-select"></div>
        </div>
        <!-- end select  -->
        <?php 
          $termsarray1 = $termsarray;
          $i = 0;

          foreach ($termsarray1 as &$value)
              $value = '.contact-'.$value;
          foreach ($termsarray as &$value)
              $value = '.'.$value.' .contact-'.$value;

          $selector = implode (',',$termsarray);
          $selector1 = implode (',',$termsarray1);
        ?>
        <style type="text/css">
          <?php echo $selector1;?>{
            display: none;
          }
          <?php echo $selector;?>{
            display: block;
          }
        </style>
        <script type="text/javascript">
          jQuery(document).ready(function() {
            jQuery(window).on('mapadded', function(event) {

            <?php 
            foreach ($allterms as &$value)
                echo $value = "jQuery('#".$value->slug."').attr('class','');";
            ?>
            jQuery('#kyiv').attr('class','active');
            });
          });
        </script>

        
        <?php
          query_posts(array('showposts' => -1,
            'post_type' => 'contact',
            // $term->taxonomy => $term->slug,
            'orderby'=>'menu_order',
            'order'=>'ASC'));
          while (have_posts()) { the_post(); 
            $address = get_field('address');
            $days = get_field('days');
            $time = get_field('time');
            $fb = get_field('facebook');
            $phone = get_field('phone');
            $terms = get_the_terms( $post->ID , 'region' );
            $t = '';
            foreach( $terms as $term ) {
             $t = $t.' contact-'.$term->slug ;
             unset($term);
            }
            ?>
            <!-- begin contact item -->
            <div class="contact <?php echo $t;?>">
            <p>
              <?php the_title(); ?>
            </p>
          
          <p class="contact__schedule">
            <?php echo $time;?>  
          </p>
          <ul class="contact__info">
            <?php if( get_field('address') ): ?>
              <li><i class="icon icon-location"></i><?php the_field('address'); ?> <span><?php echo $days;?></span></li>
            <?php endif; ?>
            <?php if( get_field('phone') ): ?>
              <li><i class="icon icon-phone2"></i><?php the_field('phone'); ?></li>
            <?php endif; ?>
            <?php if( get_field('facebook') ): ?>
              <li><i class="icon icon-facebook"></i><?php the_field('facebook'); ?></li>
            <?php endif; ?>
            
            <!-- <li><i class="icon icon-phone2"></i>(044) 254-94-88 <span>(гаряча лінія)</span></li>
            <li><i class="icon icon-facebook"></i>facebook.com/odesapolice</li> -->
          </ul>
          </div>
          <!-- END contact item -->

        
        <?php } ?>
        
      </div>
      <!-- end contacts__left -->
      <!-- begin contacts__right -->
      <div class="contacts__right" id="mapUkraine">
       <!-- <img src="img/mapu.png" alt=""> -->

      </div>
      <div class="contacts__map">
        <div class="contacts__text">
        <?php
        $content_post = get_page_by_path('contacts'); 
        $content = $content_post->post_content;
        $content = apply_filters('the_content', $content);
        echo $content;
        // if ( qtrans_getLanguage() == 'ru' ) {
        //   the_field('text_ru',29);
        // }
        // else{
        //   the_field('text_ua',29);
        // }

         
        ?>
        </div>
      </div>
      <!-- end contacts__right -->
    </div>
    <!-- end contacts -->

    <!-- <div class="align-center">
      {{mixins.btnLink('Завантажити ще', 'btn_md')}}
    </div> -->

  </div>
</div>


<?php get_footer(); ?>
