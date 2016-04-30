<?php get_header(); ?>

<?php
	$term =	$wp_query->queried_object;
	$slug_title = $term->slug;
	// print_r($term);
?>

<?php if ($slug_title != 'beer' && $slug_title != 'alcohol' && $slug_title != 'beverages' && $slug_title != 'souvenirs' && $slug_title != 'horeca'): ?>

	<?php include('top.php'); ?>

	<!-- brands -->
	<div class="brands">
		<!-- center -->
		<div class="brands__center center">
			<div class="brands__list js-brands" data-client="<?php echo $term->slug; ?>">

				<?php foreach (get_terms('client') as $cat) : ?>

					<div class="brands__item js-brands-item <?php echo $cat->slug; ?>">
						<a class="brands__link" href="<?php echo get_term_link($cat->slug, 'client'); ?>">
							<img class="brands__pic" src="<?php echo z_taxonomy_image_url($cat->term_id); ?>">
						</a>
					</div>

				<?php endforeach; ?>

			</div>
		</div>
	</div>

<?php else: ?>

	<?php if ($slug_title != 'horeca'): ?>

		<!-- top -->
		<div class="top">
			<?php include('top.php'); ?>
			<!-- center -->
			<div class="center">
				<!-- nav -->
				<nav class="nav <?php echo $slug_title; ?>">
					<?php 
						$id = 127; 
						$post = get_post($id); 
						$content = apply_filters('the_content', $post->post_content); 
						echo '<div class="nav__title">'.$content.'</div>';  
					?>
					<?php
						query_posts(array(
							'pagename' => 'beer',
							'posts_per_page' => 1,
							'post_type' => 'page'));
							while (have_posts()) { the_post(); ?>
						<a class="nav__link" href="/productions/#beer"><?php echo the_field('title'); ?></a>
					<?php } ?>
					<?php
						query_posts(array(
							'pagename' => 'alcohol',
							'posts_per_page' => 1,
							'post_type' => 'page'));
							while (have_posts()) { the_post(); ?>
						<a class="nav__link" href="/productions/#alcohol"><?php echo the_field('title'); ?></a>
					<?php } ?>
					<?php
						query_posts(array(
							'pagename' => 'beverages',
							'posts_per_page' => 1,
							'post_type' => 'page'));
							while (have_posts()) { the_post(); ?>
						<a class="nav__link" href="/productions/#beverages"><?php echo the_field('title'); ?></a>
					<?php } ?>
					<?php
						query_posts(array(
							'pagename' => 'souvenirs',
							'posts_per_page' => 1,
							'post_type' => 'page'));
							while (have_posts()) { the_post(); ?>
						<a class="nav__link" href="/productions/#souvenirs"><?php echo the_field('title'); ?></a>
					<?php } ?>
				</nav>
			</div>
		</div>

	<?php else: ?>

		<?php include('top.php'); ?>

	<?php endif ?>

<?php endif ?> 

<!-- product -->
<div class="product product_<?php echo $term->slug; ?>">
	<!-- center -->
	<div class="product__center center center_sm">
		<!-- back -->
		<a class="product__back back js-back" href="#">
			<i class="icon icon-arrow-left"></i>
		</a>
		<!-- title -->
		<!-- <div class="title">ПРОДУКЦИЯ <?php //echo $term->name; ?></div> -->
		<!-- list -->
		<div class="list">
			<!-- item -->

			<?php
				query_posts(array('showposts' => -1,
					'post_type' => 'productions',
					$term->taxonomy => $term->slug,
					'orderby'=>'menu_order',
					'order'=>'ASC'));
				while (have_posts()) { the_post(); 
					$big = get_field('bigimage');
					?>

				<a href="<?php echo $big['url']; ?>" class="item" rel="group">
					<img class="item__pic" src="<?php echo the_field('picture'); ?>" alt="">
					<?php $title = get_field('title'); if ($title != '') {
						echo '<div class="item__title">'.$title.'</div>';
					}?>
				</a>

			<?php } ?>

		</div>
	</div>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>