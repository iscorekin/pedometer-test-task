import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import * as UI from './styles';
import { shadow } from '../../../../../constants/styles';
import NumberInput from '../../../../UI/NumberInput';
import DateInput from '../../../../UI/DateInput';
import Button from '../../../../UI/Button';
import { useDispatch } from 'react-redux';
import { addNewRecord } from '../../../../../store/modules/meter';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '0',
    boxShadow: shadow,
    width: '294px',
  },
};

const AddModal: React.FC = (props) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [distance, setDistance] = useState(0);

  const closeModal = () => {
    setIsOpen(false);
    setDate(moment().format('YYYY-MM-DD'));
    setDistance(0);
  }

  const handleOpenButtonClick = () => setIsOpen(true);

  const handleDistanceChange = (value: number) => {
    if (value > 0 && value < 10 * 10 * 1000) setDistance(value);
  };

  const handleSaveClick = () => {
    dispatch(addNewRecord(
      moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY'),
      distance
    ))

    closeModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        <DateInput value={date} onChange={setDate} styles={UI.MarginStyles} />
        <NumberInput
          value={distance}
          onChange={handleDistanceChange}
          styles={UI.MarginStyles}
        />
        <Button onClick={handleSaveClick} styles={UI.MarginStyles}>
          Сохранить
        </Button>
        <Button transparent onClick={closeModal}>
          Отмена
        </Button>
      </Modal>
      <Button onClick={handleOpenButtonClick} styles={UI.AddButtonStyles}>
        Добавить запись
      </Button>
    </>
  );
};

export default AddModal;
