let mad_lib_results = document.querySelector("#mad_lib_results");

function createStory() {

    let first_adjective = document.querySelector("#first_adjective").value;
    let second_adjective = document.querySelector("#second_adjective").value;
    let third_adjective = document.querySelector("#third_adjective").value;
    let first_noun = document.querySelector("#first_noun").value;
    let present_tense_verb = document.querySelector("#present_tense_verb").value;
    let second_noun = document.querySelector("#second_noun").value;
    let third_noun = document.querySelector("#third_noun").value;
    let fourth_noun = document.querySelector("#fourth_noun").value;

    document.getElementById("mad_lib_results").innerHTML = `It was a ${first_adjective} and ${second_adjective} night when I landed in the ${third_adjective} village of ${first_noun}. 
    The grass blades froze underneath me, and my fingertips were burning as I was ${present_tense_verb} back and fourth for my ${second_noun}. 
    I pulled out my ${third_noun} as it was my only source of ${fourth_noun}. "Aha!", I cried out in relief as I finally found my ${second_noun}.`
}
