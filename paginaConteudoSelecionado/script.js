document.getElementById("eye-action").addEventListener("click", function(){

    if(this.classList.contains("bi-eye")){

        this.classList.remove("bi-eye")

        this.classList.add("bi-eye-fill")

    }else{

        this.classList.remove("bi-eye-fill")

        this.classList.add("bi-eye")

    }

    this.classList.toggle("watched")

});


document.getElementById("save-list-action").addEventListener("click",function(){

   if(this.classList.contains("bi-bookmark-plus")){


    this.classList.remove("bi-bookmark-plus")

    this.classList.add("bi-bookmark-check-fill")

   }else{

    this.classList.remove("bi-bookmark-check-fill")

    this.classList.add("bi-bookmark-plus")

   }

    this.classList.toggle("saved-list")


})


document.getElementById("star-action").addEventListener("click", function(){

    if(this.classList.contains("bi-star")){

        this.classList.remove("bi-star")

        this.classList.add("bi-star-fill")

    }else{

        this.classList.remove("bi-star-fill")

        this.classList.add("bi-star")

    }

    this.classList.toggle("rated")




})

document.getElementById("like-action").addEventListener("click",function(){


    if(this.classList.contains("bi-heart")){

        this.classList.remove("bi-heart")

        this.classList.add("bi-heart-fill")

    }else{

        this.classList.remove("bi-heart-fill")

        this.classList.add("bi-heart")

    }

    this.classList.toggle("liked")


})


document.getElementById("dislike-action").addEventListener("click",function(){

    if(this.classList.contains("bi-hand-thumbs-down")){

        this.classList.remove("bi-hand-thumbs-down")

        this.classList.add("bi-hand-thumbs-down-fill")

    }else{

        this.classList.remove("bi-hand-thumbs-fill")

        this.classList.add("bi-hand-thumbs-down")
    }

    this.classList.toggle("disliked")


})



