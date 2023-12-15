{/* <div>
      <img src="https://picsum.photos/200" alt="" />
      <a href="https://video.com">
        <h2>un altro Bellissimo</h2>
        <p>un video descrittivo della scena</p>
      </a>
    </div> */}

// Diffing... operazione di confronto tra il v dom pre update e il v dom post update...

const prevDom = {
  tag: 'div',
  children: [{
    tag: 'img', 
    attributes: {
      src: 'https://picsum.photos/200', 
      alt: ''
    }
  }, 
  {
    tag: 'a', 
    attributes: {
      href: 'https://video.com', 
    }, 
    children: [{
      tag: 'h2', 
      textContent: 'Video Bellissimo'
    }]
  }]
}

const nextDom = {
  tag: 'div',
  children: [{
    tag: 'img', 
    attributes: {
      src: 'https://picsum.photos/200', 
      alt: ''
    }
  }, 
  {
    tag: 'a', 
    attributes: {
      href: 'https://video.com', 
    }, 
    children: [{
      tag: 'h2', 
      textContent: 'un altro video Bellissimo'
    }]
  }]
}