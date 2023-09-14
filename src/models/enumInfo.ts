export const langInfo: {
  [key: number]: string
} = {
  1: 'C',
  2: 'C++',
  3: 'Java',
  4: 'Python'
}

export const submissionStatusInfo: {
  [key: number]: { color: string; description: string }
} = {
  0: { color: 'purple', description: 'Pending' },
  1: { color: 'blue', description: 'Running' },
  2: { color: 'green', description: 'Accepted' },
  3: { color: 'red', description: 'Unaccepted' },
  4: { color: 'orange', description: 'Compile Error' },
  [-1]: { color: 'gray', description: 'Unknown Error' }
}

export const judgeStatusInfo: {
  [key: number]: { color: string; description: string }
} = {
  1: { color: 'green', description: 'AC' },
  2: { color: 'red', description: 'WA' },
  3: { color: 'orange', description: 'CE' },
  4: { color: 'orangered', description: 'RE' },
  5: { color: 'purple', description: 'TLE' },
  6: { color: 'magenta', description: 'MLE' },
  7: { color: 'arcoblue', description: 'OLE' },
  [-1]: { color: 'gray', description: 'UKE' }
}
