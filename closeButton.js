<script>
    document.addEventListener('DOMContentLoaded', function() {
        var photos = document.querySelectorAll('.photo');

        photos.forEach(function(photo) {
            photo.addEventListener('click', function() {
                photo.classList.toggle('fullscreen');
            });
        });

        var closeButtons = document.querySelectorAll('.close-btn');

        closeButtons.forEach(function(btn) {
            btn.addEventListener('click', function(event) {
                event.stopPropagation();
                btn.parentElement.classList.remove('fullscreen');
            });
        });
    });
</script>
