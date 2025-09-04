// JavaScript
// DOMContentLoadedイベントリスナーを追加し、HTMLが完全に読み込まれてからスクリプトを実行するようにする
document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const trigger = document.querySelector('.hamburger');

        // menuとtriggerが存在するか確認
        if (menu && trigger) {
            menu.classList.toggle('open');
            trigger.classList.toggle('open');
        } else {
            console.error('メニュー要素またはハンバーガートリガーが見つかりません。');
        }
    }

    // グローバルスコープでtoggleMenu関数にアクセスできるようにする
    window.toggleMenu = toggleMenu;
});
