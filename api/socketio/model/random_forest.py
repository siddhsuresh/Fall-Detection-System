try:
    from time import ticks_us, ticks_diff
except ImportError:
    from time import time_ns

    def ticks_us(): return int(time_ns() * 1000)
    def ticks_diff(a, b): return a - b

class RandomForestClassifier:
    """
    # RandomForestClassifier(base_estimator=deprecated, bootstrap=True, ccp_alpha=0.0, class_name=RandomForestClassifier, class_weight=None, criterion=gini, estimator=DecisionTreeClassifier(), estimator_params=('criterion', 'max_depth', 'min_samples_split', 'min_samples_leaf', 'min_weight_fraction_leaf', 'max_features', 'max_leaf_nodes', 'min_impurity_decrease', 'random_state', 'ccp_alpha'), max_depth=None, max_features=sqrt, max_leaf_nodes=20, max_samples=None, min_impurity_decrease=0.0, min_samples_leaf=1, min_samples_split=2, min_weight_fraction_leaf=0.0, n_estimators=7, n_jobs=None, num_outputs=13, oob_score=False, package_name=everywhereml.sklearn.ensemble, random_state=None, template_folder=everywhereml/sklearn/ensemble, verbose=0, warm_start=False)
    """

    def __init__(self):
        """
        Constructor
        """
        self.latency = 0
        self.predicted_value = -1

        self.votes = [0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000]

    def predict(self, x):
        """
        Predict output from input vector
        """
        self.predicted_value = -1
        started_at = ticks_us()

        self.votes = [0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000, 0.00000000000]

        idx, score = self.tree0(x)
        self.votes[idx] += score
        
        idx, score = self.tree1(x)
        self.votes[idx] += score
        
        idx, score = self.tree2(x)
        self.votes[idx] += score
        
        idx, score = self.tree3(x)
        self.votes[idx] += score
        
        idx, score = self.tree4(x)
        self.votes[idx] += score
        
        idx, score = self.tree5(x)
        self.votes[idx] += score
        
        idx, score = self.tree6(x)
        self.votes[idx] += score

        # get argmax of votes
        max_vote = max(self.votes)
        self.predicted_value = next(i for i, v in enumerate(self.votes) if v == max_vote)

        self.latency = ticks_diff(ticks_us(), started_at)
        return self.predicted_value

    def latencyInMicros(self):
        """
        Get latency in micros
        """
        return self.latency

    def latencyInMillis(self):
        """
        Get latency in millis
        """
        return self.latency // 1000

    def tree0(self, x):
        """
        Random forest's tree #0
        """
        if x[7] <= 0.1377488598227501:
            if x[4] <= -0.3976432681083679:
                if x[5] <= -0.9197261333465576:
                    return 11, 124.0
                else:
                    if x[4] <= -0.8987898528575897:
                        if x[1] <= -0.9020848870277405:
                            if x[1] <= -0.957925945520401:
                                return 6, 107.0
                            else:
                                return 5, 141.0
                        else:
                            if x[7] <= -0.9667679071426392:
                                return 9, 110.0
                            else:
                                return 1, 98.0
                    else:
                        if x[3] <= -0.8111368417739868:
                            return 9, 110.0
                        else:
                            if x[6] <= -0.6207275390625:
                                if x[3] <= 0.3203873932361603:
                                    if x[0] <= 0.28612059354782104:
                                        return 10, 117.0
                                    else:
                                        return 6, 107.0
                                else:
                                    if x[1] <= -0.9044884443283081:
                                        return 6, 107.0
                                    else:
                                        return 10, 117.0
                            else:
                                return 6, 107.0
            else:
                if x[0] <= -0.4781285524368286:
                    if x[4] <= 0.30973705649375916:
                        if x[3] <= -1.388260543346405:
                            return 7, 106.0
                        else:
                            return 2, 128.0
                    else:
                        return 7, 106.0
                else:
                    return 0, 188.0
        else:
            if x[4] <= 0.8297341465950012:
                return 3, 193.0
            else:
                if x[6] <= 0.9770633578300476:
                    if x[2] <= -0.13884734362363815:
                        return 0, 188.0
                    else:
                        if x[1] <= 1.1259114146232605:
                            return 4, 186.0
                        else:
                            return 0, 188.0
                else:
                    return 4, 186.0

    def tree1(self, x):
        """
        Random forest's tree #1
        """
        if x[1] <= -0.6241433620452881:
            if x[3] <= -1.6453320980072021:
                return 9, 113.0
            else:
                if x[5] <= -0.901747316122055:
                    if x[2] <= -0.8636659681797028:
                        return 11, 107.0
                    else:
                        if x[3] <= 0.09795960783958435:
                            return 12, 126.0
                        else:
                            return 5, 106.0
                else:
                    if x[5] <= -0.15505210310220718:
                        if x[0] <= 0.36413922905921936:
                            if x[1] <= -0.9182804226875305:
                                return 6, 110.0
                            else:
                                if x[6] <= -0.5839816629886627:
                                    return 10, 115.0
                                else:
                                    return 11, 107.0
                        else:
                            return 6, 110.0
                    else:
                        return 6, 110.0
        else:
            if x[3] <= -0.46057935059070587:
                if x[1] <= 0.0566742904484272:
                    if x[0] <= -1.6491743922233582:
                        if x[6] <= -0.7500563263893127:
                            return 9, 113.0
                        else:
                            return 7, 107.0
                    else:
                        if x[2] <= -0.44129954278469086:
                            return 2, 140.0
                        else:
                            return 1, 128.0
                else:
                    if x[7] <= -0.9338614344596863:
                        return 9, 113.0
                    else:
                        if x[5] <= -0.13266395777463913:
                            return 2, 140.0
                        else:
                            return 7, 107.0
            else:
                if x[5] <= 0.49915386736392975:
                    if x[6] <= -0.12847283482551575:
                        return 1, 128.0
                    else:
                        if x[5] <= 0.2703571021556854:
                            return 0, 182.0
                        else:
                            return 8, 182.0
                else:
                    return 4, 193.0

    def tree2(self, x):
        """
        Random forest's tree #2
        """
        if x[7] <= 0.053515687584877014:
            if x[0] <= -1.9671820998191833:
                return 9, 111.0
            else:
                if x[5] <= -0.12082859501242638:
                    if x[5] <= -0.92921382188797:
                        if x[1] <= -0.9139273166656494:
                            if x[4] <= -0.9447798132896423:
                                return 5, 109.0
                            else:
                                return 6, 106.0
                        else:
                            if x[0] <= -0.08810147643089294:
                                if x[1] <= -0.5881932079792023:
                                    return 11, 125.0
                                else:
                                    return 2, 108.0
                            else:
                                return 12, 113.0
                    else:
                        if x[3] <= -0.829351156949997:
                            if x[0] <= -0.7132509648799896:
                                return 2, 108.0
                            else:
                                return 10, 121.0
                        else:
                            if x[4] <= -0.23909855633974075:
                                if x[1] <= -0.8852258920669556:
                                    if x[4] <= -0.9169958233833313:
                                        return 5, 109.0
                                    else:
                                        return 6, 106.0
                                else:
                                    return 10, 121.0
                            else:
                                return 0, 193.0
                else:
                    if x[2] <= -0.08786118030548096:
                        if x[7] <= -0.48195622861385345:
                            return 7, 120.0
                        else:
                            return 1, 122.0
                    else:
                        if x[1] <= -0.9192004799842834:
                            return 6, 106.0
                        else:
                            return 7, 120.0
        else:
            if x[5] <= 0.34793950617313385:
                if x[1] <= 0.20546791702508926:
                    return 8, 192.0
                else:
                    if x[0] <= 0.9595365822315216:
                        return 0, 193.0
                    else:
                        return 0, 193.0
            else:
                return 4, 179.0

    def tree3(self, x):
        """
        Random forest's tree #3
        """
        if x[1] <= -0.4817376285791397:
            if x[1] <= -0.8878341019153595:
                if x[4] <= -0.8828435838222504:
                    if x[1] <= -0.9614474177360535:
                        return 5, 128.0
                    else:
                        return 5, 128.0
                else:
                    return 6, 113.0
            else:
                if x[5] <= -0.9353390336036682:
                    return 11, 103.0
                else:
                    if x[6] <= -0.8580183684825897:
                        if x[6] <= -0.9936106503009796:
                            return 10, 126.0
                        else:
                            return 9, 114.0
                    else:
                        if x[1] <= -0.7692545056343079:
                            return 10, 126.0
                        else:
                            return 2, 108.0
        else:
            if x[7] <= -0.09876052290201187:
                if x[1] <= 0.4538246840238571:
                    if x[0] <= -1.596278190612793:
                        return 7, 145.0
                    else:
                        if x[5] <= -0.5232140719890594:
                            return 2, 108.0
                        else:
                            return 1, 100.0
                else:
                    return 7, 145.0
            else:
                if x[4] <= 0.5648823082447052:
                    if x[2] <= -0.19723942875862122:
                        return 0, 174.0
                    else:
                        return 3, 174.0
                else:
                    if x[4] <= 1.5076481699943542:
                        if x[6] <= 0.9610073864459991:
                            if x[0] <= 1.2421944737434387:
                                if x[5] <= 0.5431728661060333:
                                    return 0, 174.0
                                else:
                                    return 4, 218.0
                            else:
                                return 0, 174.0
                        else:
                            if x[0] <= 1.3351585268974304:
                                return 8, 165.0
                            else:
                                return 4, 218.0
                    else:
                        return 0, 174.0

    def tree4(self, x):
        """
        Random forest's tree #4
        """
        if x[7] <= 0.04997794143855572:
            if x[3] <= -1.6754732131958008:
                return 9, 117.0
            else:
                if x[1] <= -0.887481302022934:
                    if x[3] <= 0.0470692403614521:
                        return 6, 115.0
                    else:
                        if x[4] <= -0.8702095746994019:
                            return 5, 110.0
                        else:
                            return 6, 115.0
                else:
                    if x[2] <= -0.5144086182117462:
                        if x[3] <= -0.8279482424259186:
                            return 2, 115.0
                        else:
                            if x[6] <= -0.4199363738298416:
                                if x[3] <= -0.35211724042892456:
                                    if x[5] <= -1.01102876663208:
                                        return 11, 108.0
                                    else:
                                        return 10, 118.0
                                else:
                                    return 10, 118.0
                            else:
                                return 2, 115.0
                    else:
                        if x[3] <= -0.9929668009281158:
                            return 7, 133.0
                        else:
                            if x[7] <= -0.45489923655986786:
                                if x[1] <= -0.5069957375526428:
                                    return 10, 118.0
                                else:
                                    return 1, 104.0
                            else:
                                if x[4] <= 1.0204518735408783:
                                    return 4, 180.0
                                else:
                                    return 7, 133.0
        else:
            if x[4] <= 0.8297341465950012:
                if x[5] <= 0.49915386736392975:
                    return 0, 183.0
                else:
                    return 3, 213.0
            else:
                if x[1] <= 0.9865032136440277:
                    if x[3] <= 0.9615308046340942:
                        return 4, 180.0
                    else:
                        return 8, 203.0
                else:
                    if x[2] <= 0.047434402629733086:
                        return 0, 183.0
                    else:
                        return 8, 203.0

    def tree5(self, x):
        """
        Random forest's tree #5
        """
        if x[7] <= -0.11126329004764557:
            if x[0] <= -1.9657893180847168:
                return 9, 112.0
            else:
                if x[0] <= -0.6265309453010559:
                    if x[2] <= -0.6357037127017975:
                        if x[1] <= -0.7016293704509735:
                            return 11, 112.0
                        else:
                            return 2, 111.0
                    else:
                        if x[6] <= -0.05486568249762058:
                            return 7, 112.0
                        else:
                            return 1, 98.0
                else:
                    if x[0] <= 0.21689646691083908:
                        return 10, 121.0
                    else:
                        if x[4] <= -0.8541123867034912:
                            return 5, 103.0
                        else:
                            if x[2] <= -0.6672248840332031:
                                if x[1] <= -0.8445887863636017:
                                    return 6, 117.0
                                else:
                                    return 12, 109.0
                            else:
                                return 6, 117.0
        else:
            if x[5] <= 0.34562453627586365:
                if x[4] <= 0.6352266073226929:
                    if x[4] <= -0.006644962355494499:
                        return 1, 98.0
                    else:
                        if x[1] <= 0.5618994235992432:
                            return 8, 214.0
                        else:
                            return 0, 190.0
                else:
                    return 0, 190.0
            else:
                if x[3] <= 0.36844828724861145:
                    if x[2] <= -0.010455429088324308:
                        return 3, 188.0
                    else:
                        return 4, 197.0
                else:
                    if x[5] <= 0.7784692943096161:
                        if x[4] <= 0.4546440690755844:
                            return 3, 188.0
                        else:
                            return 8, 214.0
                    else:
                        if x[4] <= 0.591079831123352:
                            return 3, 188.0
                        else:
                            return 4, 197.0

    def tree6(self, x):
        """
        Random forest's tree #6
        """
        if x[3] <= -1.7183695435523987:
            return 9, 124.0
        else:
            if x[4] <= -0.0980021022260189:
                if x[3] <= -0.030225233174860477:
                    if x[1] <= -0.6552999913692474:
                        if x[0] <= -0.08602098375558853:
                            if x[5] <= -0.9276885986328125:
                                if x[2] <= -0.8347914218902588:
                                    return 11, 99.0
                                else:
                                    return 12, 118.0
                            else:
                                return 10, 124.0
                        else:
                            return 12, 118.0
                    else:
                        if x[0] <= -1.695601224899292:
                            if x[6] <= -0.5735725462436676:
                                return 9, 124.0
                            else:
                                return 7, 102.0
                        else:
                            return 2, 124.0
                else:
                    if x[1] <= -0.886730968952179:
                        if x[5] <= -0.8213743567466736:
                            return 5, 113.0
                        else:
                            if x[4] <= -0.8349054753780365:
                                return 5, 113.0
                            else:
                                return 6, 122.0
                    else:
                        if x[0] <= 0.228042371571064:
                            if x[1] <= -0.7237817347049713:
                                return 10, 124.0
                            else:
                                return 3, 207.0
                        else:
                            return 12, 118.0
            else:
                if x[3] <= -0.7766006290912628:
                    if x[4] <= 0.4218924045562744:
                        return 2, 124.0
                    else:
                        return 7, 102.0
                else:
                    if x[5] <= 0.4997778683900833:
                        if x[0] <= -0.43655717372894287:
                            return 2, 124.0
                        else:
                            if x[2] <= -0.3421850949525833:
                                return 0, 176.0
                            else:
                                return 0, 176.0
                    else:
                        return 4, 189.0