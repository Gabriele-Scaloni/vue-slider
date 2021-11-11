var carousel = new Vue ({
    el: "#app",
    data: {
        activeSlide:0,
        slides:[
            {
                Image:'img/01.jpg',
                title:"Svezia",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic rem repellat soluta eaque ipsa possimus quo! Eveniet, libero eaque!"
            },
            {
                Image:'img/02.jpg',
                title:"Svizzera",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                Image:'img/03.jpg',
                title:"Gran Bretagna",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic"
            },
            {
                Image:'img/04.jpg',
                title:"Germania",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic rem repellat soluta eaque ipsa possimus quo! Eveniet, libero eaque!"
            },
            {
                Image:'img/05.jpg',
                title:"Canarie",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic !"
            },
        ],
    },
   
     methods: {
        slideNext : function(){
            if(this.activeSlide === this.slides.length - 1) {
                this.activeSlide = 0;
            } else {
                this.activeSlide ++;
            }
          }, 

            slideBefore : function() {
                if(this.activeSlide === 0 ){
                    this.activeSlide
                }
            }
        }
            
});