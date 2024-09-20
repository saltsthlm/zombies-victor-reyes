import { ok } from "node:assert/strict";
import { test } from "node:test";

type Zombie = {
  name: string;
};

const createRoom = (capacity?: number) => {
  const _capacity = capacity ?? 0;
  const zombies: Zombie[] = [];

  return {
    isFull: () => zombies.length >= _capacity,
    /**
     * Tries to add a zombie to the room.
     *
     * @param zombie - The zombie to be added.
     * @returns `true` if the zombie was successfully added, `false` if the room is full.
     */
    addZombie: (zombie: Zombie) => {
      if (zombies.length < _capacity) {
        zombies.push(zombie);
        return true;
      }
      return false;
    },
  };
};

test("room is full", () => {
  const room = createRoom(0);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1);

  const isRoomFull = room.isFull();

  ok(!isRoomFull);
});

test("room with no capacity cannot fit any zombies", () => {
  const room = createRoom();
  const zombie = { name: "Alex" };

  const addZombieSuccesefully = room.addZombie(zombie);

  ok(!addZombieSuccesefully);
});

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1);
  const zombie = { name: "Alex" };
  room.addZombie(zombie);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});

test.skip("two-roomer is not full when a zombie is added", () => {});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
