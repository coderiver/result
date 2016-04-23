<?php
/**
 * Template Name: Textual page
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
<div class="out">
  <div class="l">
    <div class="section-header section-header_top-margin">
      <a href="catalog-mgf.html" class="btn btn_sm btn_semi"><span>назад в каталог</span></a>
    </div>
    <?php while ( have_posts() ) : the_post(); ?>
                <?php get_template_part( 'content', 'page' ); ?>
                <?php comments_template( '', true ); ?>
            

    <div class="section-header">
      <h1 class="h2"><?php the_title();?></h1>
    </div>
    <div class="hero-picture" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/hero-picture.jpg')"></div>
  </div>
  <div class="l-center">
    <div class="clearfix">
      <div class="l-catalog-item-main">
        <div class="l-col-620 text">
          <?php the_content();?>
 
        </div>
<?php endwhile; // end of the loop. ?>
        <table class="table table_striped">
        <colgroup><col width="67" /> <col width="69" /> <col width="54" /> <col width="64" /> <col span="2" width="52" /> <col span="2" width="50" /> <col width="68" /> <col width="72" /> <col width="63" /> <col width="58" /> <col width="53" /> <col width="76" /> <col width="72" /> </colgroup>
<thead>
<tr>
<th rowspan="3" width="67" height="127">Название товара</th>
<th rowspan="2" width="69">Толщина</th>
<th rowspan="2" width="54">Плотность плиты</th>
<th colspan="2" width="116">Размер листа</th>
<th colspan="5" width="292">Паллета</th>
<th colspan="4" width="250">Еврофура</th>
<th rowspan="3" width="72">Вес упаковки, кг (одной паллеты)</th>
</tr>
<tr>
<th rowspan="2" width="64" height="107">ширина, мм</th>
<th rowspan="2" width="52">длина, мм</th>
<th rowspan="2" width="52">кол-во плит, шт.</th>
<th rowspan="2" width="50">м2</th>
<th rowspan="2" width="50">м3</th>
<th rowspan="2" width="68">вес пачки (нетто), кг</th>
<th rowspan="2" width="72">вес пачки (брутто), кг</th>
<th rowspan="2" width="63">кол-во паллет, шт.</th>
<th rowspan="2" width="58">м2</th>
<th rowspan="2" width="53">м3</th>
<th rowspan="2" width="76">вес (брутто), кг</th>
</tr>
<tr>
<th width="69" height="76">мм</th>
<th width="54">кг/м3</th>
</tr>
</thead>
<tbody>
<tr>
<td height="20">MDF</td>
<td>3</td>
<td>880</td>
<td>2800</td>
<td>2070</td>
<td>138</td>
<td>799,85</td>
<td>2,40</td>
<td>2112</td>
<td>2266</td>
<td>9</td>
<td>7198,63</td>
<td>21,60</td>
<td>20394</td>
<td>154</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>5</td>
<td> 820 </td>
<td>2800</td>
<td> 2070 </td>
<td>88</td>
<td>510,05</td>
<td>2,55</td>
<td> 2091 </td>
<td>2245</td>
<td>9</td>
<td> 4590,43 </td>
<td>22,95</td>
<td> 20205 </td>
<td>154</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>6</td>
<td>820</td>
<td>2800</td>
<td> 2070 </td>
<td>72</td>
<td> 417,31 </td>
<td> 2,50 </td>
<td>2050</td>
<td>2204</td>
<td> 9 </td>
<td>3755,81</td>
<td>22,53 </td>
<td>19836</td>
<td>154</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>8</td>
<td>820</td>
<td>2800</td>
<td>2070</td>
<td>54</td>
<td>312,98</td>
<td>2,50</td>
<td>2050</td>
<td>2204</td>
<td>9</td>
<td>2816,86</td>
<td>22,53</td>
<td>19836</td>
<td>154</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>10</td>
<td>820</td>
<td>2800</td>
<td>2070</td>
<td>48</td>
<td>278,21</td>
<td>2,78</td>
<td>2168</td>
<td>2322</td>
<td>9</td>
<td>2503,87</td>
<td>25,04</td>
<td>20898</td>
<td>154</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>12</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>40</td>
<td>231,84</td>
<td>2,78</td>
<td>2168</td>
<td>2302</td>
<td>9</td>
<td>2086,56</td>
<td>25,04</td>
<td>20718</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>16</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>30</td>
<td>173,88</td>
<td>2,78</td>
<td>2168</td>
<td>2302</td>
<td>9</td>
<td>1564,92</td>
<td>25,04</td>
<td>20718</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>18</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>26</td>
<td>150,70</td>
<td>2,71</td>
<td>2113</td>
<td>2247</td>
<td>9</td>
<td>1356,26</td>
<td>24,41</td>
<td>20223</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>19</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>26</td>
<td>150,70</td>
<td>2,86</td>
<td>2230</td>
<td>2364</td>
<td>9</td>
<td>1356,26</td>
<td>25,77</td>
<td>21276</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>22</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>22</td>
<td>127,51</td>
<td>2,81</td>
<td>2191</td>
<td>2325</td>
<td>9</td>
<td>1147,61</td>
<td>25,25</td>
<td>20925</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>25</td>
<td>760</td>
<td>2800</td>
<td>2070</td>
<td>20</td>
<td>115,92</td>
<td>2,90</td>
<td>2204</td>
<td>2338</td>
<td>9</td>
<td>1043,28</td>
<td>26,08</td>
<td>21042</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>28</td>
<td>750</td>
<td>2800</td>
<td>2070</td>
<td>18</td>
<td>104,33</td>
<td>2,92</td>
<td>2190</td>
<td>2324</td>
<td>9</td>
<td>938,95</td>
<td>26,29</td>
<td>20916</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>30</td>
<td>730</td>
<td>2800</td>
<td>2070</td>
<td>16</td>
<td>92,74</td>
<td>2,78</td>
<td>2029</td>
<td>2163</td>
<td>9</td>
<td>834,62</td>
<td>25,04</td>
<td>19467</td>
<td>134</td>
</tr>
<tr>
<td height="20">MDF</td>
<td>38</td>
<td>730</td>
<td>2800</td>
<td>2070</td>
<td>14</td>
<td>81,14</td>
<td>3,08</td>
<td>2248</td>
<td>2382</td>
<td>9</td>
<td>730,30</td>
<td>27,75</td>
<td>21438</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л1 МДФ</td>
<td>10</td>
<td>820</td>
<td>2800</td>
<td>2070</td>
<td>48</td>
<td>278,21</td>
<td>2,78</td>
<td>1992</td>
<td>2126</td>
<td>9</td>
<td>2503,87</td>
<td>25,04</td>
<td>19134</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л1 МДФ</td>
<td>12</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>40</td>
<td>231,84</td>
<td>2,78</td>
<td>2168</td>
<td>2302</td>
<td>9</td>
<td>2086,56</td>
<td>25,04</td>
<td>20718</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л1 МДФ</td>
<td>16</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>30</td>
<td>173,88</td>
<td>2,78</td>
<td>2168</td>
<td>2302</td>
<td>9</td>
<td>1564,92</td>
<td>25,04</td>
<td>20718</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л1 МДФ</td>
<td>18</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>26</td>
<td>150,70</td>
<td>2,71</td>
<td>2113</td>
<td>2247</td>
<td>9</td>
<td>1356,26</td>
<td>24,41</td>
<td>20223</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л1 МДФ</td>
<td>19</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>26</td>
<td>150,70</td>
<td>2,86</td>
<td>2230</td>
<td>2364</td>
<td>9</td>
<td>1356,26</td>
<td>25,77</td>
<td>21276</td>
<td>134</td>
</tr>
<tr>
<td height="21">Л1 МДФ</td>
<td>22</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>22</td>
<td>127,51</td>
<td>2,81</td>
<td>2191</td>
<td>2325</td>
<td>9</td>
<td>1147,61</td>
<td>25,25</td>
<td>20925</td>
<td>134</td>
</tr>
<tr>
<td height="21">Л1 МДФ</td>
<td>25</td>
<td>760</td>
<td>2800</td>
<td>2070</td>
<td>20</td>
<td>115,92</td>
<td>2,90</td>
<td>2204</td>
<td>2338</td>
<td>9</td>
<td>1043,28</td>
<td>26,08</td>
<td>21042</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л2МДФ</td>
<td>16</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>30</td>
<td>173,88</td>
<td>2,78</td>
<td>2168</td>
<td>2302</td>
<td>9</td>
<td>1564,92</td>
<td>25,04</td>
<td>20718</td>
<td>134</td>
</tr>
<tr>
<td height="20">Л2МДФ</td>
<td>18</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>26</td>
<td>150,70</td>
<td>2,71</td>
<td>2113</td>
<td>2274</td>
<td>9</td>
<td>1356,26</td>
<td>24,41</td>
<td>20223</td>
<td>134</td>
</tr>
<tr>
<td height="21">Л2МДФ</td>
<td>19</td>
<td>780</td>
<td>2800</td>
<td>2070</td>
<td>26</td>
<td>150,70</td>
<td>2,86</td>
<td>2230</td>
<td>2364</td>
<td>9</td>
<td>1356,26</td>
<td>25,77</td>
<td>21276</td>
<td>134</td>
</tr>
</tbody>
</table>
      </div>
    </div>
  </div>

  
<?php get_template_part( 'partials/related' ); ?> 
<?php get_template_part( 'partials/map' ); ?> 

<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>