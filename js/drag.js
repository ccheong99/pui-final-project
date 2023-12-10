document.addEventListener('DOMContentLoaded', function () {
    var rail = document.getElementById("rail"),
        knob = document.getElementById("knob"),
        railLength = rail.getTotalLength();
    const body = document.body;

    Draggable.create(document.createElement('div'), {
        type: 'x',
        throwProps: true,
        bounds: { minX: 0, maxX: railLength },
        trigger: knob,
        overshootTolerance: 0,
        onDrag: update,
        onThrowUpdate: update
    });

    function update() {
        var P = rail.getPointAtLength(this.x);
        TweenLite.set(knob, { attr: { x: P.x - 50, y: P.y - 50 } });

        const knobPosition = knob.getBoundingClientRect().left + knob.clientWidth / 2;
        const railEnd = rail.getBoundingClientRect().right;

        if (knobPosition >= railEnd / 1) {
        } else {
        }

        if (knobPosition >= railEnd / 2) {
            body.style.backgroundColor = '#FFF5D2';
            document.getElementById("box-1").style.backgroundColor = '#117C63';
            document.getElementById("box-2").style.backgroundColor = '#9BBB97';
            document.getElementById("box-3").style.backgroundColor = '#E8C95E';
        } else {
            body.style.backgroundColor = '';
            document.getElementById("box-1").style.backgroundColor = '';
            document.getElementById("box-2").style.backgroundColor = '';
            document.getElementById("box-3").style.backgroundColor = '';
        }

        if (knobPosition >= railEnd * 3 / 4) {
            body.style.fontFamily = 'Arial';
            document.getElementById("textpath").style.fontFamily = 'Arial';
            document.getElementById("box-7-content").style.fontFamily = 'Arial';
            document.getElementById("box-7-content").style.fontWeight = 'light';
        } else {
            body.style.fontFamily = '';
            document.getElementById("textpath").style.fontFamily = '';
            document.getElementById("box-7-content").style.fontFamily = '';
            document.getElementById("box-7-content").style.fontWeight = '';
        }
    }
});
