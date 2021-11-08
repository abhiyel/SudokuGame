let elements = document.getElementsByClassName("box");
let usedHints = 0;
let mode = 0//0-easy 1-medium 2-hard
let arr=[];
let solarr=[];
const easy1 = [[0,0,3,0,4,2,0,9,0],
             [0,9,0,0,6,0,5,0,0],
             [5,0,0,0,0,0,0,1,0],
             [0,0,1,7,0,0,2,8,5],
             [0,0,8,0,0,0,1,0,0],
             [3,2,9,0,0,8,7,0,0],
             [0,3,0,0,0,0,0,0,1],
             [0,0,5,0,9,0,0,2,0],
             [0,8,0,2,1,0,6,0,0]];



const easy2 = [[0,7,0,0,2,0,0,4,6],
             [0,6,0,0,0,0,8,9,0],
             [2,0,0,8,0,0,7,1,5],
             [0,8,4,0,9,7,0,0,0],
             [7,1,0,0,0,0,0,5,9],
             [0,0,0,1,3,0,4,8,0],
             [6,9,7,0,0,2,0,0,8],
             [0,5,8,0,0,0,0,6,0],
             [4,3,0,0,8,0,0,7,0]];

const easy3 = [[0,3,0,0,1,0,0,6,0],
             [7,5,0,0,3,0,0,4,8],
             [0,0,6,9,8,4,3,0,0],
             [0,0,3,0,0,0,8,0,0],
             [9,1,2,0,0,0,6,7,4],
             [0,0,4,0,0,0,5,0,0],
             [0,0,1,6,7,5,2,0,0],
             [6,8,0,0,9,0,0,1,5],
             [0,9,0,0,4,0,0,3,0]];

const medium1 = [ [0,1,3,0,0,0,5,4,0],
             [4,0,0,0,0,0,0,0,7],
             [0,0,7,4,0,2,1,0,0],
             [0,0,0,2,0,9,0,0,0],
             [9,4,0,0,0,0,0,5,2],
             [0,0,0,1,0,5,0,0,0],
             [0,0,9,5,0,7,8,0,0],
             [6,0,0,0,0,0,0,0,1],
             [0,3,4,0,0,0,7,2,0]];

const medium2 = [[0,6,0,0,0,3,2,0,0],
               [0,1,0,9,0,0,6,0,4],
               [0,0,0,0,8,0,0,0,5],
               [0,0,0,8,0,0,7,4,0],
               [9,0,0,3,0,2,0,0,6],
               [0,7,3,0,0,4,0,0,0],
               [3,0,0,0,5,0,0,0,0],
               [2,0,7,0,0,9,0,6,0],
               [0,0,6,7,0,0,0,9,0]];

const medium3 = [[1,0,8,0,0,5,0,0,6],
               [0,0,0,0,0,0,0,0,0],
               [5,0,3,8,2,0,7,0,0],
               [2,0,0,1,5,0,9,0,8],
               [0,0,0,0,8,0,0,0,0],
               [8,0,9,0,4,2,0,0,5],
               [0,0,5,0,9,8,2,0,4],
               [0,0,0,0,0,0,0,0,0],
               [9,0,0,2,0,0,6,0,1]];

const hard1 = [[0,0,6,0,0,0,0,0,4],
             [0,0,0,8,6,0,7,3,0],
             [0,4,0,3,5,0,0,0,2],
             [1,7,0,4,0,0,6,0,0],
             [0,9,0,0,0,0,0,8,0],
             [0,0,8,0,0,6,0,1,7],
             [2,0,0,0,8,1,0,4,0],
             [0,6,7,0,4,3,0,0,0],
             [8,0,0,0,0,0,3,0,0]];

const hard2 = [[7,0,9,0,0,0,0,0,8],
             [0,0,0,1,9,0,0,0,2],
             [0,2,0,8,0,0,0,9,0],
             [0,7,0,0,0,0,0,4,3],
             [2,0,4,0,0,0,5,0,9],
             [9,8,0,0,0,0,0,7,0],
             [0,3,0,0,0,5,0,6,0],
             [8,0,0,0,2,3,0,0,0],
             [5,0,0,0,0,0,3,0,7]];

const hard3 = [[0,0,9,7,4,8,0,0,0],
             [7,0,0,0,0,0,0,0,0],
             [0,2,0,1,0,9,0,0,0],
             [0,0,7,0,0,0,2,4,0],
             [0,6,4,0,1,0,5,9,0],
             [0,9,8,0,0,0,3,0,0],
             [0,0,0,8,0,3,0,2,0],
             [0,0,0,0,0,0,0,0,6],
             [0,0,0,2,7,5,9,0,0]];


easyPuzzles = [easy1,easy2,easy3];
mediumPuzzles = [medium1,medium2,medium3];
hardPuzzles = [hard1,hard2,hard3];
puzzles = [easyPuzzles,mediumPuzzles,hardPuzzles];

function arraysAreIdentical(arr1, arr2){
    if (arr1.length != arr2.length) return false;
    let equal = 0
    for (let i = 0, len = arr1.length; i < len; i++){
        for(let j=0;j<arr1.length;j++)
        {
            if(arr1[i][j]!=arr2[i][j])
            {
                equal = equal+1
            }
        }
    }
    if(equal==0)
    {
        return true;
    }
    else{
        return false;
    }
}
let myFunction = function() {
    let id = this.id;
    let n=0
    while(isNaN(n) || n<=0 || n>9)
    {
        n = Number(window.prompt("Enter number (1-9)"));
    }
    document.getElementById(id).innerHTML = n;
    arrid = Array.from(id);
    let r = 9-Number(arrid[1]);
    let c = Number(arrid[2])-1;
    arr[r][c] = Number(n);
    if(arraysAreIdentical(arr, solarr))
    {
        alert("GENIUS! YOU SOLVED THE SUDOKU!!");
    }
};
function sudokuHint()
{
    if(usedHints==5)
    {
        alert("Maximum 5 hints can be used!");
    }
    else if(arr == solarr)
    {
        alert("Sudoku is already solved!");
    }
    else
    {
        usedHints = usedHints+1;
        document.getElementById("availableHints").innerText = "Available Hints : "+String(5 - usedHints);
        i = Math.floor(Math.random() * 10);
        j = Math.floor(Math.random() * 10);
        while(i==0 || i==9 || j==0 || j==9 || arr[i][j]==solarr[i][j])
        {
            i = Math.floor(Math.random() * 10);
            j = Math.floor(Math.random() * 10);
        }
        arr[i][j] = solarr[i][j]
        n = arr[i][j]
        str1 = "a"+String((9-i))+String((1+j));
        document.getElementById(str1).innerHTML = n;
        document.getElementById(str1).style.backgroundColor = "yellow";
    }
    
}
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}
function isSafe(board, row, col, num)
{
    for(let d = 0; d < board.length; d++)
    {
        if (board[row][d] == num)
        {
            return false;
        }
    }

    for(let r = 0; r < board.length; r++)
    {
        if (board[r][col] == num)
        {
            return false;
        }
    }

    let sqrt = Math.floor(Math.sqrt(board.length));
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;
 
    for(let r = boxRowStart;r < boxRowStart + sqrt; r++)
    {
        for(let d = boxColStart;
                d < boxColStart + sqrt; d++)
        {
            if (board[r][d] == num)
            {
                return false;
            }
        }
    }

    return true;
}
 
function solveSudoku(board, n)
{
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if (board[i][j] == 0)
            {
                row = i;
                col = j;

                isEmpty = false;
                break;
            }
        }
        if (!isEmpty)
        {
            break;
        }
    }

    if (isEmpty)
    {
        return true;
    }

    for(let num = 1; num <= n; num++)
    {
        if (isSafe(board, row, col, num))
        {
            board[row][col] = num;
            if (solveSudoku(board, n))
            {
                return true;
            }
            else
            {
                board[row][col] = 0;
            }
        }
    }
    return false;
}

function printSudoku()
{
    N = solarr.length;
    for(let r = 0; r < N; r++)
        {
            for(let d = 0; d < N; d++)
            {
                str1 = "a"+String((9-r))+String((1+d));
                arr[r][d] = solarr[r][d];
                document.getElementById(str1).innerHTML = solarr[r][d];
            }
        }
}
function GetSelectedItem(el)
{
    let e = document.getElementById(el);
    if(e.options[e.selectedIndex].value=="easy"){mode = 0;}
    else if(e.options[e.selectedIndex].value=="medium"){mode = 1;}
    else{mode = 2;}
    for(let i = 0;i<9;i++)
    {
        for (let j=0;j<9;j++)
        {
            r = 9-i;
            c = 1+j;
            document.getElementById("a"+String(r)+String(c)).style.backgroundColor = "#8FF786";
            document.getElementById("a"+String(r)+String(c)).innerHTML = "";
        }
    }
    let n = Math.floor(Math.random() * 3)
    arr = puzzles[mode][n]
    solarr = JSON.parse(JSON.stringify(arr));
    solveSudoku(solarr, solarr.length)
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            r = 9-i;
            c = 1+j;
            if(arr[i][j]!=0)
            {
                document.getElementById("a"+String(r)+String(c)).style.backgroundColor = "#33cc33";
                document.getElementById("a"+String(r)+String(c)).innerHTML = arr[i][j];
            }
        }
    }
}

