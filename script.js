var carousel = new Vue ({
    el: "#app",
    data: {
        activeSlide:0,
        slides:[
            {
                image:'img/01.jpg',
                title:"Svezia",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic rem repellat soluta eaque ipsa possimus quo! Eveniet, libero eaque!"
            },
            {
                image:'img/02.jpg',
                title:"Svizzera",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid "
            },
            {
                image:'img/03.jpg',
                title:"Gran Bretagna",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic"
            },
            {
                image:'img/04.jpg',
                title:"Germania",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic rem repellat soluta eaque ipsa possimus quo! Eveniet, libero eaque!"
            },
            {
                image:'img/05.jpg',
                title:"Canarie",
                text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente nam, animi voluptates aliquid recusandae accusantium placeat ratione vero hic !"
            },
        ],
    },
   
    methods: {
        //funzione per andare sull'img seguente
        slideNext : function(){
            if(this.activeSlide === this.slides.length - 1) {
                this.activeSlide = 0;
            } else {
                this.activeSlide ++;
            }
        }, 
        //funzione per andare sull'img precedente, se parte da 0 vado all'ultima
        slideBefore : function() {
            if(this.activeSlide === 0 ){
                this.activeSlide = this.slides.length -1;
            }else {
                this.activeSlide --;
            }
        }
    }
            
});