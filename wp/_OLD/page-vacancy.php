<?php get_header(); ?>

<div class="page-content kyiv">
  <div class="l ">

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
              $value = '.vac-'.$value;
          foreach ($termsarray as &$value)
              $value = '.'.$value.' .vac-'.$value;

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
        <!-- begin vacancy wrapper -->
        <div class="vacancy-wrapper">

          <?php
            query_posts(array('showposts' => -1,
              'post_type' => 'vacancy',
              // $term->taxonomy => $term->slug,
              'orderby'=>'menu_order',
              'order'=>'ASC'));
            while (have_posts()) { the_post(); 
              $file = get_field('file');
              $terms = get_the_terms( $post->ID , 'region' );
              $t = '';
              foreach( $terms as $term ) {
               $t = $t.''.$term->slug ;
               unset($term);
              }
              ?>
            <!-- begin vacancy  -->
            <div class="vacancy <?php echo 'vac-'.$t;?>">
              <div class="vacancy__title"><?php the_title();?></div>
              <a href='<?php echo $file;?>' class="vacancy__download"><i class="icon icon-pdf"></i><span><?php echo __('<!--:ru-->Загрузить детали вакансии<!--:--><!--:ua-->Завантажити деталі вакансії<!--:-->');?></span></a>
            </div>
            <!-- end vacancy -->
          <?php } ?>
        </div>
        <!-- end vacancy wrapper -->
      </div>
      <!-- end contacts__left -->
      <script>
        // $(document).ready(function() {
        //   $('.js-region').on('change', function (e) {
        //       var optionSelected = $("option:selected", this);
        //       var valueSelected = this.value;
        //       alert(valueSelected);
        //   });
        // });
      </script>
      <!-- begin contacts__right -->
      <div class="contacts__right" id="mapUkraine">
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
