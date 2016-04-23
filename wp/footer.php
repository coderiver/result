

<!-- BEGIN scripts -->
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/common.js"></script>
<?php if(is_home()){ ?>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/main-page.js"></script>
<?php } else{ ?>
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/js/common-page.js"></script>
<?php }?>

<!-- END scripts -->
<?php wp_footer();?>
</body>
</html>