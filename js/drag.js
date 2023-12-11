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

        function stopAnimationAndSetPosition(elementId) {
            var element = document.getElementById(elementId);
            var computedStyle = window.getComputedStyle(element);
            var currentTransformValue = computedStyle.getPropertyValue("transform");
        
            // Stop animation
            element.style.animation = 'none';
        
            // Set the current position as the fixed position
            element.style.transform = currentTransformValue;
        }
        
        // Resume animation
        function resumeAnimation(elementId, animationValue) {
            var element = document.getElementById(elementId);
        
            element.style.animation = animationValue;
        }

        //Design changes on dragging slider
        if (knobPosition >= railEnd / 4) {
            
            document.getElementById("video").style.display = 'none';
            document.getElementById("video-to-image").style.display = 'block';
            document.getElementById("dither1").style.display = 'none';
            document.getElementById("dither2").style.display = 'none';
            stopAnimationAndSetPosition("bounce-1");
            stopAnimationAndSetPosition("bounce-2");
            stopAnimationAndSetPosition("bounce-3");
        
            if (knobPosition >= railEnd / 2) {
                body.style.backgroundColor = '#FFF5D2';
                document.getElementById("title").style.color = '#F8EAB8';
                document.getElementById("section-1-row-1-column-2-text").style.color = '#2E432B';
                document.getElementById("box-1").style.backgroundColor = '#117C63';
                document.getElementById("box-2").style.backgroundColor = '#9BBB97';
                document.getElementById("box-3").style.backgroundColor = '#E8C95E';
                document.getElementById("box-4").style.backgroundColor = '#FFF8DF';
                document.getElementById("box-5").style.backgroundColor = '#788179';
                document.getElementById("box-6").style.backgroundColor = '#BC7A7A';
                document.getElementById("combinedShape").style.fill = '#779A73';
                document.getElementById("bounce-1").style.backgroundColor = '#A74039';
                document.getElementById("icon-arrow2").style.display = 'block';
                document.getElementById("icon-arrow").style.display = 'none';
                document.getElementById("img-triangle2").style.display = 'block';
                document.getElementById("img-triangle").style.display = 'none';
                document.getElementById("bounce-3").style.backgroundColor = '#BDA345';
                document.getElementById("video-to-image").style.display = 'none';
                document.getElementById("dither1").style.display = 'block';
        
                if (knobPosition >= railEnd * 3 / 4) {
                    body.style.fontFamily = 'Arial';
                    document.getElementById("textpath").style.fontFamily = 'Arial';
                    document.getElementById("box-7-content").style.fontFamily = 'Arial';
                    document.getElementById("box-5-content").style.fontFamily = 'Arial';
                    document.getElementById("box-3-content").style.fontFamily = 'Arial';
                    document.getElementById("dither1").style.display = 'none';
                    document.getElementById("dither2").style.display = 'block';
                } else {
                    body.style.fontFamily = '';
                    document.getElementById("textpath").style.fontFamily = '';
                    document.getElementById("box-7-content").style.fontFamily = '';
                    document.getElementById("box-3-content").style.fontWeight = '';
                    document.getElementById("dither2").style.display = 'none';
                }
            } else {
                body.style.backgroundColor = '';
                document.getElementById("title").style.color = '';
                document.getElementById("section-1-row-1-column-2-text").style.color = '';
                document.getElementById("box-1").style.backgroundColor = '';
                document.getElementById("box-2").style.backgroundColor = '';
                document.getElementById("box-3").style.backgroundColor = '';
                document.getElementById("box-4").style.backgroundColor = '';
                document.getElementById("box-5").style.backgroundColor = '';
                document.getElementById("box-6").style.backgroundColor = '';
                document.getElementById("combinedShape").style.fill = '';
                document.getElementById("bounce-1").style.backgroundColor = '';
                document.getElementById("icon-arrow2").style.display = 'none';
                document.getElementById("icon-arrow").style.display = 'block';
                document.getElementById("img-triangle2").style.display = 'none';
                document.getElementById("img-triangle").style.display = 'block';
                document.getElementById("bounce-3").style.backgroundColor = '';
                document.getElementById("video-to-image").style.display = 'block';
                document.getElementById("dither1").style.display = 'none';
            }
        } else {
            body.style.fontFamily = '';
            document.getElementById("textpath").style.fontFamily = '';
            document.getElementById("box-7-content").style.fontFamily = '';
            document.getElementById("box-5-content").style.fontFamily = '';
            document.getElementById("box-3-content").style.fontWeight = '';
            document.getElementById("video").style.display = 'block';
            document.getElementById("video-to-image").style.display = 'none';
            document.getElementById("dither1").style.display = 'none';
            document.getElementById("dither2").style.display = 'none';
            resumeAnimation("bounce-1", "bounce-1 2.4s infinite alternate");
            resumeAnimation("bounce-2", "bounce-2 2.8s infinite alternate");
            resumeAnimation("bounce-3", "bounce-3 2s infinite alternate");
        }
    }
});
