(() =>{
    const $addBtn = document.querySelector('#add-btn');
    $addBtn.addEventListener('click', () => {
        const $input = document.querySelector('#new-todo');
        
        const $li = document.createElement('li');
        $li.innerText = $input.value;

        const $doneBtn = document.createElement('button');
        $doneBtn.innerText = 'Done !'
        $doneBtn.addEventListener('click', () => {
            $li.classList.toggle('done');
        });
        $li.appendChild($doneBtn);

        const $ul = document.querySelector('ul');
        $ul.appendChild($li);

        //空に
        $input.value = '';
    });    

})();