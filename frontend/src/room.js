// const journeyImages = [
//     "https://images.nga.gov/?service=asset&action=show_preview&asset=149503",
//     "https://www.impressionists.org/images/paintings/bridge-at-argenteuil.jpg",
//     "https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.art-critique.com/wp-content/uploads/thumbs/16-524577-3a57h6fzrmunifi45r2dj4.jpg",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg/1280px-Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg",
//     "https://www.claude-monet.com/images/paintings/cliff-walk-at-pourville.jpg",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thomas_Cole_-_The_Voyage_of_Life_Old_Age%2C_1842_%28National_Gallery_of_Art%29.jpg/1280px-Thomas_Cole_-_The_Voyage_of_Life_Old_Age%2C_1842_%28National_Gallery_of_Art%29.jpg"]

function loadRoom(paintings){

    let roomTitle = document.createElement('h2')
    roomTitle.innerText = paintings[0].rooms[0].name
    let roomTable = document.createElement('table')
    let roomTableRow = document.createElement('tr')
    let roomTableRow2 = document.createElement('tr')
    //debugger

    paintings.forEach(painting => {
        //debugger
        let roomTableData = document.createElement('td')
        let roomTableImg = document.createElement('img')
        roomTableImg.width = "250"
        // roomTableImg.dataset.coordinates = "  "
        // Create image
        roomTableImg.id = "source"
        roomTableImg.style.display = "none"
        
        //Create image text
        let imgP = document.createElement('span')
        imgP.innerText = painting.title
        imgP.dataset.id = painting.id 

        // Show page or one painting on click
        imgP.addEventListener("click", function(){
            
            mainBody.innerHTML = ""

            // Painting title
            let imgHeader = document.createElement('h2')
            imgHeader.innerText = painting.title

            // Painting artist
            let imgArtist = document.createElement('h3')
            imgArtist.innerText = `By ${painting.artist}`
            
            // Painting movement
            let imgMovement = document.createElement('h4')
            imgMovement.innerText = `Movement: ${painting.movement}`

            // Painting date
            let imgDate = document.createElement('h4')
            imgDate.innerText = `Date: ${painting.date}`

            // Zoom box
            zoomBox = document.createElement('div')
            zoomBox.className = "zoom-box"

            $(function(){
                $("img").jqZoom({
                    selectorWidth: 30,
                    selectorHeight: 30,
                    viewerWidth: 400,
                    viewerHeight: 300
                });
            })

            let zoomImg = document.createElement('img')
            zoomImg.src = painting.image_url 
            zoomImg.width = "400"
            zoomImg.height = "300"
            zoomBox.append(zoomImg)

            saveBtn = document.createElement('button')
            saveBtn.innerText = "*"

            mainBody.append(imgHeader, imgArtist, imgMovement, imgDate, zoomBox, saveBtn)
            
            if (painting === paintings[0]){
                let tourBtn = document.createElement('button')
                tourBtn.innerText = "Visual Tour"
                mainBody.append(tourBtn)
            }

        })
        roomTableImg.src = painting.image_url
        roomTableData.append(roomTableImg, imgP)

        if (painting === paintings[0] || painting === paintings[1] || painting === paintings[2]){  
            roomTableRow.append(roomTableData)
        }
        else{
            roomTableRow2.append(roomTableData)
        }


    })
    
    roomTable.append(roomTableRow, roomTableRow2)
    mainBody.append(roomTitle, roomTable)
    let frame = document.createElement('img')
    frame.id = "frame"
    frame.src = "https://www.onlygfx.com/wp-content/uploads/2020/01/gold-picture-frame-1.png"
    frame.style.display = "none"
    mainBody.append(frame)
    
    setTimeout(function(){draw()}, 1000);
    //draw()

    function draw() {
        //debugger
        for (var i = 0; i < document.images.length; i++) {
            if (document.images[i].getAttribute('id') != 'frame') {
                canvas = document.createElement('canvas');
                canvas.setAttribute('width', 500);
                canvas.setAttribute('height', 400);

                document.images[i].parentNode.insertBefore(canvas,document.images[i]);

                ctx = canvas.getContext('2d');

                ctx.drawImage(document.images[i], 55, 55);
                ctx.drawImage(document.getElementById('frame'), 0, 0, 500, 400);
            }
        }
}
}
