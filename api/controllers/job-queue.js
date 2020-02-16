const EventEmitter = require('events');
const ax

class JobManager extends EventEmitter {

  /**
   * Queue of problem submissions to send to the judges
   * 
   * @type { {src: string, test: string}[] }
   */
  queue;
  /**
   * Number of judges available
   * @type {number}
   */
  num_judges;

  constructor(num_judges) {
    this.queue = [];
    this.num_judges = num_judges;
  }

  push(job) {
    this.queue.push(job);
    this.emit('received', job);
  }

  pop() {

  }

  async submitToJudge() {

  }
}


module.exports = JobManager;
