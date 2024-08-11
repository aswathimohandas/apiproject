const res=fetch('https://api.tvmaze.com/shows/1/episodes')
console.log(res);
e=''
res.then((resolve)=>resolve.json()).then((val)=>{
    val.forEach(item=>{
        e+=`<div class="card" style="width: 18rem;">
        <img src=${item.image.medium} class="card-img-top" alt="no image" width=200px height=150px>
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.summary}</p>
          <a href="#" class="btn btn-primary"><i class="fa-solid fa-star" style="color: #eff3fb;"></i>  ${item.rating.average}</a>
        </div>
      </div>
          `
    })
    console.log(e)
    row.innerHTML=e
   

  }).catch((err) => { 
    console.error('An error occurred:', err); 
});