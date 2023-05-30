# McCulloch & Pitts Neuron


Project that complements the article [McCulloch & Pitts Neuron](https://www.adictosaltrabajo.com/2023/05/30/mcculloch-y-pitts-la-pareja-que-encendio-la-chispa-neuronal/) where we developed a McCulloch and Pitts neuron with a training method that adjusts the threshold. Developed using TypeScript as the programming language.

## Installation

### Clone the repository

```bash
git clone https://github.com/valen-developer/McCullochPittsNeuron.git
cd McCullochPittsNeuron
```

### Set node version with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```bash
nvm install 18.16.0
nvm use 18.16.0
```

### Install dependencies

```bash
npm install
```

## How to use

### Change the training and test data percentage

You can set different percentages of training and test data in the `index.ts` file.

```typescript
// PATH: src/index.ts
const const TEST_PERCENTAGE = 0.5;
```

### Run the project

```bash
npm run start
```
