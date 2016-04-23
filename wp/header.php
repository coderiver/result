<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php wp_title(''); ?></title>
	<meta name="viewport" content="width=1200">
	<meta name="format-detection" content="telephone=no">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="stylesheet" media="all" href="<?php bloginfo('template_directory'); ?>/css/app.css">
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<?php wp_head();?>
</head>
<body 
	<?php if(is_home()){echo 'class="is-homepage"';}?>
	>
<?php get_template_part( 'partials/navigation' ); ?>
