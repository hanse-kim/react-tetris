import React from 'react';
import {renderBlock} from 'src/core/render';
import {useBlock} from 'src/hooks/useBlock';
import {usePlayfield} from 'src/hooks/usePlayfield';
import {Layout} from '../layout';
import {PanelGroup, Panel} from '../panel';
import {Playfield} from '../playfield';

export const Tetris = () => {
  const {field, lock} = usePlayfield();
  const {block, setNewBlock, drop, rotate, move, hardDrop} = useBlock(
    field,
    'I'
  );

  return (
    <Layout>
      <Playfield field={renderBlock(field, block)} />
      <PanelGroup>
        <Panel label='SHAPE TEST'>
          {['I', 'O', 'J', 'L', 'Z', 'S', 'T'].map((v) => {
            return (
              <button
                key={v}
                onClick={() => {
                  setNewBlock(v);
                }}
              >
                {v}
              </button>
            );
          })}
        </Panel>
        <Panel label='ACTION TEST'>
          <button
            onClick={() => {
              drop();
            }}
          >
            DROP
          </button>
          <button
            onClick={() => {
              rotate();
            }}
          >
            ROTATE
          </button>
          <button
            onClick={() => {
              move('LEFT');
            }}
          >
            MOVE LEFT
          </button>
          <button
            onClick={() => {
              move('RIGHT');
            }}
          >
            MOVE RIGHT
          </button>
          <button
            onClick={() => {
              hardDrop();
            }}
          >
            HARD DROP
          </button>
        </Panel>
        <Panel label='LOCK TEST'>
          <button
            onClick={() => {
              lock(block, () => {
                setNewBlock('I');
              });
            }}
          >
            LOCK
          </button>
        </Panel>
      </PanelGroup>
    </Layout>
  );
};
