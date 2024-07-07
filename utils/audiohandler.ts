import * as Tone from 'tone'
let bgPlayer: Tone.Player;
let lowPass: Tone.Filter;

export async function playBackground(distort: boolean) {
    if (!bgPlayer) {
        // create an instance of the player
        bgPlayer = new Tone.Player({
            url: '/loop.m4a',
            loop: true
        }).toDestination();
        lowPass = new Tone.Filter(400, 'lowpass').toDestination();
        await Tone.loaded();
        bgPlayer.start();
    }

    if (distort) {
        bgPlayer.disconnect().chain(lowPass);
    }else{
        bgPlayer.disconnect(lowPass).toDestination();
    }
}

export async function playFX(){
    const effectsPlayer = new Tone.Player({
        url: '/rock.m4a',
        loop: false
    }).toDestination();

    await Tone.loaded();
    effectsPlayer.start();
}