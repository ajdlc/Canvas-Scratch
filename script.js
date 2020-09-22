window.onload = function() {
    console.log("Page Loaded");

    // Get the canvas
    let canvas = document.getElementById("theCanvas");
    let ctx = canvas.getContext("2d");

    let drawLineDemo = (ctx, width=1, color="#333", cap="square") => {
        ctx.beginPath();
        ctx.moveTo(300, 150);
        ctx.lineTo(450, 50);
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = cap;
        ctx.stroke();
        ctx.closePath();
    }

    let drawArcDemo = (ctx, x, y, radius, startAngle, endAngle, width=1, color="#333", cap="square") => {
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);

        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = cap;

        ctx.stroke();
    }

    let drawQuadraticCurveDemo = (ctx, controlPointX, controlPointY, endPointX, endPointY, width=1, color="#333", cap="square") => {
        ctx.beginPath();
        ctx.moveTo(15, 10);
        ctx.quadraticCurveTo(controlPointX, controlPointY, endPointX, endPointY);

        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = cap;

        ctx.stroke();
    }

    let drawBezierCurveDemo = (ctx, firstControlPointX, firstControlPointY, secondControlPointX, secondControlPointY, endPointX, endPointY, width=1, color="#333", cap="square") => {
        ctx.beginPath();
        ctx.moveTo(15, 10);
        ctx.bezierCurveTo(firstControlPointX, firstControlPointY, secondControlPointX, secondControlPointY, endPointX, endPointY);

        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = cap;

        ctx.stroke();
    }

    let pathDemo = (ctx, startX, startY, width=1, color="#333", cap="square") => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        ctx.lineTo(startX + 30, startY + 30);

        // Move back to the beginning
        ctx.moveTo(startX, startY);

        ctx.lineTo(startX + 30, startY - 30);

        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = cap;

        ctx.stroke();
        ctx.closePath();
    }

    let lineJoinDemo = (ctx, startX, startY, join="square", width=1, color="#333") => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        ctx.lineTo(startX + 50, startY - 50);
        ctx.lineTo(startX + 100, startY);

        ctx.lineJoin = join;
        ctx.lineWidth = width;
        ctx.strokeStyle = color;

        ctx.stroke();
        ctx.closePath();

    }

    let roundedCornersDemo = (ctx, startX, startY, firstControlPointX, firstControlPointY, secondControlPointX, secondControlPointY, radius, width=1, color="#333", cap="square") => {
        ctx.beginPath();
        ctx.moveTo(startX, startY);

        ctx.arcTo(firstControlPointX, firstControlPointY, secondControlPointX, secondControlPointY, radius);

        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineCap = cap;

        ctx.stroke();
        ctx.closePath();
    }

    let drawToolTip = (ctx, startX, startY, width=5, color="#333", cap="square") => {
        ctx.beginPath();

        // Creating the arrow
        ctx.moveTo(startX + 50, startY + 50);
        ctx.lineTo(startX, startY);
        ctx.lineTo(startX + 50, startY - 50);


        // ctx.lineTo(startX + 50, startY - 100);
        ctx.arcTo(startX + 50, startY - 100, startX + 100, startY - 100, 15);
        ctx.lineTo(startX + 200, startY - 100);

        ctx.arcTo(startX + 250, startY - 100, startX + 250, startY, 15);
        ctx.lineTo(startX + 250, startY + 50);

        ctx.arcTo(startX + 250, startY + 100, startX - 100, startY + 100, 15);
        ctx.lineTo(startX + 50, startY + 100);

        ctx.arcTo(startX + 50, startY + 100, startX, startY, 15);
        ctx.lineTo(startX + 50, startY + 50);

        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.lineJoin = "round";
        ctx.lineCap = cap;
        ctx.fillStyle = "gray";

        // Shadow
        ctx.shadowColor = "#999";
        ctx.shadowBlur = 25;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;


        ctx.fill();

        ctx.closePath();

        ctx.stroke();
    };

    let drawToolTip2 = (ctx, startX, startY, height, width, lineW, color="#333", cap="round") => {
        ctx.beginPath();

        // Create the arrow
        ctx.moveTo(startX + 50, startY + 50);
        ctx.lineTo(startX, startY);
        ctx.lineTo(startX + 50, startY - 50);

        // Create the upper left leg and arc
        ctx.lineTo(startX + 50, startY - 50 - height);
        ctx.arcTo(startX + 50, startY - 50 - height - 10, startX + 50 + width, startY - 50 - height - 10, 10);
        ctx.lineTo(startX + 50 + width, startY - 50 - height - 10);

        //  Create the upper right
        ctx.arcTo(startX + 50 + width + 10, startY - 50 - height - 10, startX + 50 + width + 10, startY - 50 - height - 10 + height, 10);
        ctx.lineTo(startX + 50 + width + 10, startY + 50 + height);

        // Create lower right
        ctx.arcTo(startX + 50 + width + 10, startY + 50 + height + 10, startX + 50, startY + 50 + height + 10, 10);
        ctx.lineTo(startX + 60, startY + 50 + height + 10);

        // Create lower left
        ctx.arcTo(startX + 50, startY + 50 + height + 10, startX + 50, startY - 50, 10);
        ctx.lineTo(startX + 50, startY + 50);

        ctx.lineWidth = lineW;
        ctx.strokeStyle = color;
        ctx.lineJoin = "round";
        ctx.lineCap = cap;
        ctx.fillStyle = "gray";


        // Shadow
        ctx.shadowColor = "#999";
        ctx.shadowBlur = 25;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;

        ctx.closePath();
        ctx.lineJoin = "round"
        ctx.fill();
        ctx.stroke();

    };

    let createToolTip = (ctx, startX, startY, height, width, lineW, tooltipText="", tooltipText2="", color="#333", cap="round", fillColor="rgba(201, 201, 201, 0.5)") => {
        ctx.beginPath();

        // Create the arrow
        ctx.moveTo(startX + 10, startY + 10);
        ctx.lineTo(startX, startY);
        ctx.lineTo(startX + 10, startY - 10);

        // Create the upper left leg
        // We the y point needs to be 10 pixels less (so + 10) from the line that we want to compensate for the arc
        ctx.lineTo(startX + 10, startY - 10 - height + 10);
        ctx.arcTo(startX + 10, startY - 10 - height, startX + 20, startY - 10 - height, 10);
        // Again we have to take 10 less (- 10) to compensate for the arc
        ctx.lineTo(startX + width, startY - 10 - height);

        // Create the right upper leg
        ctx.arcTo(startX + width + 10, startY - 10 - height, startX + width + 10, startY + height, 10);
        ctx.lineTo(startX + width + 10, startY + height - 10); 

        // Create the lower right arc.
        ctx.arcTo(startX + width + 10, startY + height, startX + width, startY + height, 10);
        ctx.lineTo(startX + 20, startY + height);

        // Create the left lower arc
        ctx.arcTo(startX + 10, startY + height, startX + 10, startY, 10);
        ctx.lineTo(startX + 10, startY + 10);

        // Properties
        ctx.lineWidth = lineW;
        ctx.strokeStyle = color;
        ctx.lineJoin = "round";
        ctx.lineCap = cap;
        ctx.fillStyle = "gray";

        // Shadow
        ctx.shadowColor = "#999";
        ctx.shadowBlur = 25;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;

        // Text
        ctx.font = "2.5rem serif";
        ctx.textAlign = "center";

        ctx.closePath();
        // ctx.stroke();
        ctx.fill();

        ctx.stroke();
        // Remove shadow on text
        ctx.shadowColor = "#222";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;

        ctx.strokeText(tooltipText, startX + width/2, startY - height/4);
        ctx.fillStyle = "white";
        ctx.fillText(tooltipText, startX + width/2, startY - height/4)

        ctx.strokeText(tooltipText2, startX + width/2, startY + height/3);
        ctx.fillText(tooltipText2, startX + width/2, startY + height/3)
        // ctx.closePath();

    };

    let testColor = "rgba(50, 125, 30, 0.5)";

    // drawLineDemo(ctx, 50, testColor, "round");

    // drawArcDemo(ctx, 100, 400, 50, 0, 2 * Math.PI, 15, testColor);

    // drawQuadraticCurveDemo(ctx, 500, 50, 15, 400, 10);

    // drawBezierCurveDemo(ctx, 25, 10, 350, 10, 150, 400);

    // pathDemo(ctx, 300, 300, 8);

    // lineJoinDemo(ctx, 150, 200, "round", 15);

    // roundedCornersDemo(ctx, 50, 200, 100, 100, 200, 200, 35, 15, undefined);

    // drawToolTip(ctx, 150, 180, 5, undefined, "round");

    // drawToolTip2(ctx, 150, 500, 120, 350, 5);

    createToolTip(ctx, 250, 200, 85, 500, 10, "Q1", "September 1st, 2020");
}