document.getElementById('drawing').addEventListener('change', function(event) {
    const fileList = document.getElementById('fileList');
    for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const listItem = document.createElement('li');
        listItem.className = 'file__item';
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'delete';
        removeBtn.innerHTML = '<img src="./img/form/icon/delete_gray.svg" alt="" class="delete">';
        removeBtn.addEventListener('click', function() {
            fileList.removeChild(listItem);
        });
        listItem.appendChild(removeBtn);
        
        const fileDetails = document.createElement('div');
        fileDetails.className = 'file__details';

        const fileImg = document.createElement('img');
        fileImg.src = 'img/form/icon/file.svg';
        fileImg.width = 24;
        fileImg.height = 24;
        fileDetails.appendChild(fileImg);

        const fileName = document.createElement('p');
        fileName.className = 'file__name';
        fileName.textContent = file.name;
        fileDetails.appendChild(fileName);

        const fileSize = document.createElement('span');
        fileSize.textContent = (file.size / 1024).toFixed(2) + 'kb';
        fileName.appendChild(fileSize);
        
        
        listItem.appendChild(fileDetails);
        fileList.appendChild(listItem);
    }
});

document.getElementById('upload').addEventListener('change', function(event) {
    const fileList = document.getElementById('uploadList');
    for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const listItem = document.createElement('li');
        listItem.className = 'file__item';
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'delete';
        removeBtn.innerHTML = '<img src="./img/form/icon/delete_gray.svg" alt="" class="delete">';
        removeBtn.addEventListener('click', function() {
            fileList.removeChild(listItem);
        });
        listItem.appendChild(removeBtn);
        
        const fileDetails = document.createElement('div');
        fileDetails.className = 'file__details';

        const fileImg = document.createElement('img');
        fileImg.src = 'img/form/icon/file.svg';
        fileImg.width = 24;
        fileImg.height = 24;
        fileDetails.appendChild(fileImg);

        const fileName = document.createElement('p');
        fileName.className = 'file__name';
        fileName.textContent = file.name;
        fileDetails.appendChild(fileName);

        const fileSize = document.createElement('span');
        fileSize.textContent = (file.size / 1024).toFixed(2) + 'kb';
        fileName.appendChild(fileSize);
        
        
        listItem.appendChild(fileDetails);
        fileList.appendChild(listItem);
    }
});