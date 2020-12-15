const STATES = {
    INIT: 'INIT',
    START: 'START',
    END: 'END'
};

const Actions = {
    loadQuestions() {
        console.log(`Questions are loading`);
    },
    reloadSurvey() {
        console.log(`Reload survey`);
    },
    finishSurvey() {
        console.log(`Finish survey`);
    }
};

const TRANSITIONS = [
    {  FROM: 'INIT', TO: 'START', ACTIONS: [Actions.loadQuestions] },
    {  FROM: 'INIT', TO: 'END', ACTIONS: [] },
    {  FROM: 'START', TO: 'END', ACTIONS: [Actions.finishSurvey] },
    {  FROM: 'END', TO: 'INIT', ACTIONS: [Actions.reloadSurvey] }
];


class SurveyStateMachine {
    constructor(state) {
        this.state = state;
    }
    performTransition(targetState) {
        let transition = TRANSITIONS.find((t) => {
            return ((t.FROM == this.state) && (t.TO == targetState));
        });
        if (transition) {
            transition.ACTIONS.forEach((a)=> {
                a(transition);
            })
        }
        else {
            console.log(`No transition found`);
        }

    }
}

let machine = new SurveyStateMachine(STATES.INIT);
    machine.performTransition(STATES.START);