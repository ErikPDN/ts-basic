type VotationOption = {
  numberOfVotes: number
  option: string
}

export class Votation {
  private votationOptions: VotationOption[] = []
  constructor() {

  }

  addVotationOption(votationOption: VotationOption) {
    this.votationOptions.push(votationOption)
  }

  vote(votationIndex: number) {
    if (!this.votationOptions[votationIndex]) {
      console.log("Index not exists")
      return
    }
    this.votationOptions[votationIndex].numberOfVotes++;
  }
}

const instance = new Votation()
const javaVotationOption: VotationOption = {
  numberOfVotes: 0,
  option: "Java"
}
instance.addVotationOption(javaVotationOption)
console.log(instance)
instance.vote(0);
console.log(instance)
