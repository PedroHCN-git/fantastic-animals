export default class ToolTip {
  constructor(element_ref) {
    this.tooltips = document.querySelectorAll(element_ref);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseOver(event){
    this.makeToolTip(event.currentTarget);

    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseLeave(event){
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', onMouseMove);
  }

  onMouseMove(event){
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    if (event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = event.pageX - 190 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  makeToolTip(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox =  tooltipBox;
  }

  addTooltipEvents(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init(){
    if (this.tooltips.length > 0)
      this.addTooltipEvents();
  }
}
