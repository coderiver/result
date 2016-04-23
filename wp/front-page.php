<?php get_header(); ?>
<div class="out">
    <div class="parallax-logotype">
		<svg class="icon icon-rezult-logotype">
		<use xlink:href="<?php bloginfo('template_directory'); ?>/img/sprite.svg#icon-rezult-logotype"></use>
		</svg>
    </div>
	<div class="content-wrapper">
		<?php get_template_part( 'partials/hero' ); ?>
		<?php get_template_part( 'partials/promo-text' ); ?>
		<?php get_template_part( 'partials/gallery' ); ?>
		<?php get_template_part( 'partials/products' ); ?>
		<?php get_template_part( 'partials/map' ); ?>
		<?php get_template_part( 'partials/partners' ); ?>
		<?php get_template_part( 'partials/footer-links' ); ?>
	</div>
</div>
<!-- end OUT -->
<?php get_template_part( 'partials/video' ); ?>

<?php get_footer(); ?>