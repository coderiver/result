<!-- BEGIN calculator -->
<div class="calc">
  <h4 class="calc__title">Расчет количества ламината</h4>
  <div class="calc__row">
    <span class="calc__label">площадь помещения</span>
    <div class="slider">
      <div class="slider__value">24,0 <sub>м²</sub></div>
      <div class="slider__base"data-min="0" data-max="100" data-init="24"></div>
      <div class="slider__pips">
        <div class="slider__pip">1,0 <sub>м²</sub></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip"></div>
        <div class="slider__pip">100 <sub>м²</sub></div>
      </div>
    </div>
  </div>
  <div class="calc__row">
    <span class="calc__label">способ укладки</span>
    <div class="radio-group">
      <label class="radio-select">
        <input type="radio" name="stowage" value="1.0" checked>
        <span>параллельно</span>
      </label>
      <label class="radio-select">
        <input type="radio" name="stowage" value="1.2">
        <span>по диагонали</span>
      </label>
    </div>
  </div>
  <div class="calc__row">
    <label class="checkbox">
      <input type="checkbox" name="reserve" value="1.05">
      <span>Запас на укладку —</span>
    </label>
    <strong class="calc__reserve">5%</strong>
  </div>
  <div class="calc__result-lable"><span>необходимо упаковок</span></div>
  <div class="calc__result">12</div>
</div>
<!-- END calculator -->
