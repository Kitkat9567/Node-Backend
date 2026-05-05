const journalRepository = require('../repositories/journalRepositry');
const Journal = require('../dtos/journalDTO');


 const createJournal = async(req, res, next) => {
    try {
        const {title, content, date} = req.body;
        const journalDto = new Journal({title, content, date});
        const result = await journalRepository.createJournal(journalDto);
        return res.status(201).json({message: 'Created', data:result});
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getJournal = async(req, res, next) => {
    try {
        const result = await journalRepository.findAllJournals();
        return res.status(200).json({message: 'Below are the Journals', data: result})
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = {createJournal, getJournal}

