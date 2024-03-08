$(document).ready(function () {
    const crosswordData = {
        gridSize: 15,
        grid: [],
        clues: {
            across: [],
            down: []
        }
    };

    let gadiData = 'చి|లు|ము|#|కం|డూ|తి|#|గుం|భ|నం|#|వె|ర|గు' + '\n' +
        'త్రాం|#|క్త|#|పం|#|#|#|#|#|ది|#|ట్ట|#|రు' + '\n' +
        'గ|ద|#|#|#|#|సిం|#|గ|#|#|#|#|కూ|తు' + '\n' +
        'దు|రి|తం|#|కా|#|హి|#|రి|#|లం|#|ఎ|ని|మా' + '\n' +
        'డు|#|గే|#|లు|#|క|ర్ణి|క|#|కి|#|ల్లం|#|ట' + '\n' +
        '#|పో|డు|#|వ|గ|#|#|#|వే|ణి|#|కి|లో|#' + '\n' +
        '#|త|#|#|#|ట్టు|మె|#|దం|డం|#|#|#|హి|#' + '\n' +
        '#|పో|రు|బా|ట|#|#|#|#|#|ఏ|తా|వా|తా|#' + '\n' +
        '#|సి|#|#|#|కో|ష్ఠం|#|భ్రా|త|#|#|#|స్యు|#' + '\n' +
        '#|న|భం|#|తం|పి|#|#|#|మి|ష|#|మా|డు|#' + '\n' +
        'క|#|జ|#|డ|#|దా|యా|ది|#|రా|#|ని|#|అం' + '\n' +
        'న|మ|నం|#|ము|#|ల్చి|#|గ్గ|#|యి|#|క|ల|ప' + '\n' +
        'క|ప్పు|#|#|#|#|న|#|జం|#|#|#|#|బా|కా' + '\n' +
        'ధా|#|పే|#|కే|#|#|#|#|#|ప్రే|#|వా|#|లు' + '\n' +
        'ర|జ|ను|#|కి|ల్బి|షం|#|తె|రు|వు|#|సా|ర|వ' + '\n' +
        '===' + '\n' +
        '1. లోహాలకు పట్టే మురికి' + '\n' +
        '3. దురద' + '\n' +
        '4. రహస్యం' + '\n' +
        '6. ఆశ్చర్యము' + '\n' +
        '8. వాయుపుత్రుల చేతిలో ఆయుధం' + '\n' +
        '12. చివరి అక్షరం లేకపోయినా ఆడపడుచు మారదు' + '\n' +
        '13. రోటీలు కాల్చే పొయ్యిని గజిబిజి చెయ్యడం పాపం' + '\n' +
        '17. కడుపు ఖాళీ అవడానికి వైద్యుడిచ్చేది' + '\n' +
        '18. చేతి నడిమివేలితో వేసే బాణ విశేషము' + '\n' +
        '19. గిరిజనులు చేసే సాగు పద్ధతి' + '\n' +
        '20. సంతాపం' + '\n' +
        '22. అనేక ప్రవాహముల కలయిక' + '\n' +
        '23. బరువు ప్రమాణం' + '\n' +
        '25. అటువైపు నుంచి ఉన్న సోపానం' + '\n' +
        '26. కర్రతో నమస్కారం చేయండి' + '\n' +
        '27. విప్లవమార్గం' + '\n' +
        '28. ....నేను చెప్పొచ్చేది ఏమిటంటే' + '\n' +
        '29. గాదె' + '\n' +
        '30. తోడబుట్టిన వాడు' + '\n' +
        '32. ఆకాశం' + '\n' +
        '34. కలహం' + '\n' +
        '35. సాకు' + '\n' +
        '37. దగ్ధమగు' + '\n' +
        '39. జ్ఞాతి' + '\n' +
        '42. వంగుట' + '\n' +
        '44. చెక్క' + '\n' +
        '46. ఆటలో గెలిచి టీ తాగేది' + '\n' +
        '47. కొమ్ము బూర' + '\n' +
        '52. లోహపు పొడి' + '\n' +
        '53. పాపం' + '\n' +
        '54. మార్గం' + '\n' +
        '55. ఇంటి పని మేస్త్రీ గోడపక్కన ఏర్పాటి చేసుకునే మెట్లు' + '\n' +
        '===' + '\n' +
        '1. విచిత్రవీర్యుడి అన్' + '\n' +
        '2. ఆణిపూస' + '\n' +
        '3. దడ' + '\n' +
        '5. శివుడి వాహనం' + '\n' +
        '6. వేడిమి' + '\n' +
        '7. సామెత' + '\n' +
        '9. ఒడ్డు' + '\n' +
        '10. సుందరకాండలో హనుమంతుడిని మింగజూసిన ఒక రాక్షస స్త్రీ' + '\n' +
        '11. గడ్డి గాదము' + '\n' +
        '12. సన్నగా ఈ రాగాలు తీస్తుంటారు కొంతమంది' + '\n' +
        '14. పసుప్పచ్చటి పూలు పూసే గోశ్రేణి' + '\n' +
        '15. నీటి మార్గం' + '\n' +
        '16. పావని పిడిగుద్దుతో కూలిన లంకాధిదేవత' + '\n' +
        '17. తెలంగాణా యాదాద్రి జిల్లాలో ఒక ఊరు' + '\n' +
        '19. మూసలో పోసిన పోతన విగ్రహం' + '\n' +
        '21. కయ్యల మధ్య అడ్డం' + '\n' +
        '22. ప్రార్థించం' + '\n' +
        '24. సత్య హరిశ్చంద్రుని కొడుకు' + '\n' +
        '29. ఆగ్రహించిన వాడు' + '\n' +
        '31. కుతూహలము' + '\n' +
        '33. విరుపు' + '\n' +
        '34. దంతం అయితే 26 అడ్డం సమూహం' + '\n' +
        '36. శిలతో లాగు' + '\n' +
        '37. ఒక కొలత' + '\n' +
        '38. ఈ స్తోత్రం లక్ష్మీదేవి అనుగ్రహం కోసం' + '\n' +
        '39. ఈ చెక్క ఒక మసాలా దినుసు' + '\n' +
        '40. దిశకో ఏనుగు' + '\n' +
        '41. శరప్రవాహం' + '\n' +
        '43. నేర్పుగా మార్పు చెందిన మరుపు' + '\n' +
        '45. తిరగబడిన బాలిక' + '\n' +
        '48. బంకతో చేరితే పైరు తెగులు' + '\n' +
        '49. క గుణింతంలో నెమలి' + '\n' +
        '50. కడుపులో ఉండేదాని రూపాంతరం' + '\n' +
        '51. పైకి వచ్చిన స్నేహం చివర లేదు';

    let gadiParts = gadiData.split('===');

    let gridPattern = gadiParts[0];

    crosswordData.grid = convertGridToJSON(gridPattern);
    crosswordData.clues.across = convertCluesToJson(gadiParts[1]);
    crosswordData.clues.down = convertCluesToJson(gadiParts[2]);

    function convertGridToJSON(grid) {
        // Split the grid into rows by line breaks
        const rows = grid.trim().split('\n');

        // Initialize the JSON array
        const jsonArray = [];

        // Loop through each row
        for (const row of rows) {
            // Create a new row array
            const rowArray = [];

            // Loop through each character in the row
            for (const char of row.split('|')) {
                // Check if the character is blocked
                if (char == '#') {
                    rowArray.push({ type: 'block' });
                } else {
                    // Otherwise, it's a free cell
                    rowArray.push({ type: 'free', content: char });
                }
            }

            // Add the row array to the JSON array
            jsonArray.push(rowArray);
        }

        return jsonArray;
    }

    function convertClueLineTextToJSON(text) {
        // Split the text into parts using the dot as a delimiter
        const parts = text.trim().split('.');

        // Check if there are exactly two parts
        if (parts.length < 2) {
            throw new Error("Invalid text format: Expected a number and a clue separated by a dot.");
        }

        // Try converting the first part to a number
        const number = Number(parts[0]);

        // If conversion fails, throw an error
        if (isNaN(number)) {
            throw new Error("Invalid number format in the text.");
        }

        // Create the JSON object with the number and clue
        return { number: number, clue: parts.slice(1).join("") };
    }

    function convertCluesToJson(clues) {
        let clueLines = clues.trim().split('\n');
        let clueObjects = [];
        clueLines.forEach((line, lineIndex) => {
            clueObjects.push(convertClueLineTextToJSON(line));
        });
        return clueObjects;
    }


    const crosswordContainer = $('#crossword');
    let table = $('<table></table>');

    let clueNumber = 1; // Initialize clue numbering


    function isStartOfWordAcross(row, col, grid) {
        // Check if it's the start of a word across
        const isStartAcross = (col === 0) || (grid[row][col - 1].type === 'block');
        const hasNextAcross = (col < grid[row].length - 1) && (grid[row][col + 1].type === 'free');

        return isStartAcross && hasNextAcross;
    }

    function isStartOfWordDown(row, col, grid) {
        // Check if it's the start of a word down
        const isStartDown = (row === 0) || (grid[row - 1][col].type === 'block');
        const hasNextDown = (row < grid.length - 1) && (grid[row + 1][col].type === 'free');

        return isStartDown && hasNextDown;
    }
    
    // Helper function to check if a cell is a start of a word
    function isStartOfWord(row, col, grid) {
        return isStartOfWordAcross(row, col, grid) || isStartOfWordDown(row, col, grid);
    }


    crosswordData.grid.forEach((row, rowIndex) => {
        let tr = $('<tr></tr>');
        row.forEach((cell, cellIndex) => {
            let cellId = `${rowIndex}_${cellIndex}`;
            let td = $('<td></td>');
            if (cell.type === 'block') {
                td.addClass('block');
            } else { // cell.type === 'free'
                let input = $('<input type="text" maxlength="6">').val(cell.content).attr('id', cellId);
                td.append(input);

                if (isStartOfWord(rowIndex, cellIndex, crosswordData.grid)) {
                    if (isStartOfWordAcross(rowIndex, cellIndex, crosswordData.grid)) {
                        cell.acrossStart = clueNumber;
                    }
    
                    if (isStartOfWordDown(rowIndex, cellIndex, crosswordData.grid)) {
                        cell.downStart = clueNumber;
                    }
                    // This cell is the start of a word; assign and increment the clue number
                    cell.clueNumber = clueNumber++;

                    let numberSpan = $('<span class="cell-number"></span>').text(cell.clueNumber);
                    td.prepend(numberSpan); // Prepend so the number appears above the input
                }
                //console.log("Assigning acrossStart and downStart for the cell " + rowIndex + " " + cellIndex);
                if (cellIndex > 0 && crosswordData.grid[rowIndex][cellIndex - 1].type === 'free') {
                    cell.acrossStart = crosswordData.clues.across.find(clue => clue.number === crosswordData.grid[rowIndex][cellIndex - 1].acrossStart).number;
                }
                if (rowIndex > 0 && crosswordData.grid[rowIndex - 1][cellIndex].type === 'free') {
                    cell.downStart = crosswordData.clues.down.find(clue => clue.number === crosswordData.grid[rowIndex - 1][cellIndex].downStart).number;
                }

                
                td.addClass('start'); // Add class for styling or identification

                let clueText = "";
                if (cell.acrossStart) {
                    clueText += "అడ్డం: <b>" + crosswordData.clues.across.find(clue => clue.number === cell.acrossStart).clue  + '</b><br>';
                }
                if (cell.downStart) {
                    clueText += "నిలువు: <b>" + crosswordData.clues.down.find(clue => clue.number === cell.downStart).clue + '</b>';
                }
                td.attr('title', clueText);               
            }
            tr.append(td);
        });
        table.append(tr);
    });

    crosswordContainer.append(table);

    $(document).tooltip({
        items: "td", // Apply tooltips to table cells
        content: function() {
            return $(this).attr('title'); // Use the title attribute as the content of the tooltip
        },
        show: null, // Show immediately without any effects
        track: true // Tooltip follows the cursor
    });

    // Render clues
    crosswordData.clues.across.forEach(clue => {
        $('#acrossClues ul').append(`<li>${clue.number}. ${clue.clue}</li>`);
    });

    crosswordData.clues.down.forEach(clue => {
        $('#downClues ul').append(`<li>${clue.number}. ${clue.clue}</li>`);
    });

    // Function to handle arrow key navigation
    function handleArrowKeyNavigation(event) {
        const key = event.keyCode || event.which;
        const arrows = { left: 37, up: 38, right: 39, down: 40 };
        const currentInput = $(event.target);
        let currentInputId = currentInput.attr('id');
        let currentInputRowColumns = currentInputId.split('_');
        let row = Number(currentInputRowColumns[0]);
        let column = Number(currentInputRowColumns[1]);
        const currentTd = currentInput.closest('td');
        const currentTr = currentTd.closest('tr');
        let targetInput;

        switch(key) {
            case arrows.right:
                // Find next input in the row
                targetInput = currentTd.nextAll('td').find('input:text:first');
                targetInput = findNextFreeCellRight(row, column, crosswordData.grid);
                break;
            case arrows.left:
                // Find previous input in the row
                targetInput = currentTd.prevAll('td').find('input:text:first');
                targetInput = findNextFreeCellLeft(row, column, crosswordData.grid);
                break;
            case arrows.down:
                // Find input in the same column in the next row
                const columnIndexDown = currentTd.index();
                targetInput = currentTr.next('tr').find(`td:eq(${columnIndexDown}) input:text:first`);
                targetInput = findNextFreeCellDown(row, column, crosswordData.grid);
                break;
            case arrows.up:
                // Find input in the same column in the previous row
                const columnIndexUp = currentTd.index();
                targetInput = currentTr.prev('tr').find(`td:eq(${columnIndexUp}) input:text:first`);
                targetInput = findNextFreeCellUp(row, column, crosswordData.grid);
                break;
        }

        if (targetInput && targetInput.length > 0) {
            targetInput.focus();
            event.preventDefault(); // Prevent default arrow key behavior (scrolling)
        }
    }

    function findNextFreeCellRight(row, column, grid) {
        let nextRightCellIndex = column;
        while(true) {
            nextRightCellIndex = (nextRightCellIndex + 1) % grid.length;
            if(grid[row][nextRightCellIndex].type === 'free') {
                return $('#' + row + '_' + nextRightCellIndex);
            }
        }
    }

    function findNextFreeCellLeft(row, column, grid) {
        let nextLeftCellIndex = column;
        while(true) {
            nextLeftCellIndex = (nextLeftCellIndex - 1 + grid.length) % grid.length;
            if(grid[row][nextLeftCellIndex].type === 'free') {
                return $('#' + row + '_' + nextLeftCellIndex);
            }
        }
    }

    function findNextFreeCellDown(row, column, grid) {
        let nextDownCellIndex = row;
        while(true) {
            nextDownCellIndex = (nextDownCellIndex + 1) % grid.length;
            if(grid[nextDownCellIndex][column].type === 'free') {
                return $('#' + nextDownCellIndex + '_' + column);
            }
        }
    }

    function findNextFreeCellUp(row, column, grid) {
        let nextUpCellIndex = row;
        while(true) {
            nextUpCellIndex = (nextUpCellIndex - 1 + grid.length) % grid.length;
            if(grid[nextUpCellIndex][column].type === 'free') {
                return $('#' + nextUpCellIndex + '_' + column);
            }
        }
    }


    // Attach the event handler to all input fields within the crossword grid
    $('#crossword input[type="text"]').keydown(handleArrowKeyNavigation);
});
