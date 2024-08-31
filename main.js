function loadGame(gameName) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Clear previous game content

    if (gameName === 'snake') {
        // Load Snake Game
        gameContainer.innerHTML = '<iframe src="snake/index.html" width="100%" height="100%" frameborder="0"></iframe>';
    } else if (gameName === 'pingpong') {
        // Load Ping Pong Game
        gameContainer.innerHTML = '<iframe src="pingpong/index.html" width="100%" height="100%" frameborder="0"></iframe>';
    } else if (gameName === 'flappybird') {
        // Load Flappy Bird Game
        gameContainer.innerHTML = '<iframe src="flappybird/index.html" width="100%" height="100%" frameborder="0"></iframe>';
    } else if (gameName === 'minesweeper') {
        // Load Minesweeper Game
        gameContainer.innerHTML = '<iframe src="minesweeper/index.html" width="100%" height="100%" frameborder="0"></iframe>';
    }
}
