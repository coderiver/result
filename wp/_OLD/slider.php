<!-- BEGIN hero -->
<div class="hero">
  <div class="hero-slider" data-speed="<?php the_field('speed', 77); ?>">
    <div class="hero-slider__slides">
		<!-- begin slides -->
		<?php
			query_posts(array('showposts' => -1,
				'post_type' => 'slider',
				'orderby'=>'menu_order',
				'order'=>'ASC'));
			while (have_posts()) { the_post(); 
				// $big = get_field('bigimage');
				$image = get_field('image');
				$sub = get_field('subtitle');
				$gray = get_field('gray_text');
				// $position = get_field('position');
				// if($position=='Middle'){
				// 	$class = 'hero-slide-2';
				// }
				// else{
				// 	$class = 'hero-slide-2';
				// }
				$class = 'hero-slide-2';
				?>


				<div class="hero-slide <?php echo $class; ?>">
				  <div class="l">
				    <div class="hero-slide__content">
				    <h1 class="title title_lg"><?php the_title();?></h1>
				    <p><?php echo $sub; ?></p>

					<?php $link = get_field('link'); if ($link != '') {
						echo '<a href="'.$link.'" class="link-more">'.__('<!--:ru-->Подробнее<!--:--><!--:ua-->Детальніше<!--:-->').' <i class="icon icon-more"></i></a>';
					} else {?>
						<span class="hero-slide__link">
					    <?php echo $gray; ?>
					    </span>
					<?php }?>
				    
				    </div>
				    <img src="<?php echo $image['url']; ?>" alt="" class="hero-slide__image">
				  </div>
				</div>
		<?php } ?>
		

		<!-- end slides -->
    </div>
    <div class="hero-slider__nav">
      <div class="l">
        <button type="button" class="hero-slider__prev icon icon-arrow-left"></button>
        <button type="button" class="hero-slider__next icon icon-arrow-right"></button>
      </div>
    </div>
  </div>
</div>
<!-- END hero -->