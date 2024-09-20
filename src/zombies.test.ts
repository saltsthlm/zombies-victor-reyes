import { deepStrictEqual } from "node:assert";
import { ok } from "node:assert/strict";
import { test } from "node:test";

type Zombie = {
  id: number;
  name: string;
};

const createRoom = (capacity?: number) => {
  const _capacity = capacity ?? 0;
  const zombies: Zombie[] = [];

  return {
    zombies,

    isFull: () => zombies.length >= _capacity,

    /**
     * Attempts to add a zombie to the room.
     * If the room is already at full capacity, the new zombie consumes (removes from the list) the oldest one.
     * If the capacity is zero, no zombies can be added.
     *
     * @param zombie - The zombie to be added.
     * @returns `true` if the zombie was successfully added, `false` if the room has zero capacity.
     */
    addZombie: (zombie: Zombie) => {
      if (_capacity === 0) return false;

      if (zombies.length == _capacity) {
        zombies.shift();
      }

      zombies.push(zombie);

      return true;
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
  const zombie = { id: 0, name: "Alex" };

  const addZombieSuccesefully = room.addZombie(zombie);

  ok(!addZombieSuccesefully);
});

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1);
  const zombie = { id: 0, name: "Alex" };
  room.addZombie(zombie);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});

test("two-roomer is not full when a zombie is added", () => {
  const room = createRoom(2);
  const zombie = { id: 0, name: "Alex" };
  room.addZombie(zombie);

  const isRoomFull = room.isFull();

  ok(!isRoomFull);
});

test("second zombie consumes first zombie when added to a one-roomer", () => {
  const room = createRoom(1);
  const zombieAlex = { id: 0, name: "Alex" };
  const zombieFred = { id: 1, name: "Fred" };
  room.addZombie(zombieAlex);
  room.addZombie(zombieFred);

  const currentZombies = room.zombies;

  deepStrictEqual(currentZombies, [zombieFred]);
});

// You are free to add more tests that you think are relevant!
