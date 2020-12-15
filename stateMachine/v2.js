function createMachine(stateMachineDefinition) {
    const machine = {
        value: stateMachineDefinition.initialState,
        transition(currentState, event) {
            const currentStateDefinition = stateMachineDefinition[currentState];
            const destinationTransition = currentStateDefinition.transitions[event];
            if (!destinationTransition) {
                return;
            }
            const destinationState = destinationTransition.target;
            const destinationStateDefinition = stateMachineDefinition[destinationState];
            destinationTransition.action();
            currentStateDefinition.actions.onExit();
            destinationStateDefinition.action().onEnter();

            machine.value = destinationState;
            return machine.value;
        }
    }
    return machine;
}

const machine = createMachine({
    initialState: 'off',
    on: {
        actions: {
            onEnter() {
                console.log(`on: Enter`);
            },
            onExit()  {
                console.log(`on: Exit`);
            }
        },
        transitions: {
            switch: {
                target: 'off'
            },
            action() {
                console.log(`Transition from on to off state`);
            }
        }
    },
    off: {
        actions: {
            onEnter() {
                console.log(`off: Enter`);
            },
            onExit()  {
                console.log(`off: Exit`);
            }
        },
        transitions: {
            switch: {
                target: 'on'
            },
            action() {
                console.log(`Transition from off to on state`);
            }
        }

    }
});

let state = machine.value;
console.log(`current state: ${state}`);
state = machine.transition(state, 'switch');
console.log(`current state: ${state}`);
state = machine.transition(state, 'switch');
console.log(`current state: ${state}`);